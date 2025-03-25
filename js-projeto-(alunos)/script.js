// Digitação (JS Completo)
// controle do menu para mobile
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');


menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');

    // bloquear o scroll quando o menu estiver aberto
    document.body.style.overflow = navList.classList.contains('open') ?
    'hidden' : 'auto';
});

// fechar menu ao clicar nos links
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Fechar ao rolar a página
window.addEventListener('scroll', () => {
    if(navList.classList.contains('open')){
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});


// navegaçao ativa
// seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navlist a');

// função para adicionar a classe 'active' no link clicado
function activeLink(){
    navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

// adiciona um evento de clique no link de nagegação 
navLinks.forEach(item => item.addEventListener('click', activeLink));

// alternar modo claro e modo escuro 
// função para alterar entre os temas 
function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');

    // salva o tema escolhido no LOcalStorage
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // altrar aparência do título 
    updateTextColor();
}

// função que altera a cor do texto de acordo com o tema
function updateTextColor(){
    currentColor = document.documentElement.classList.contains('light') ?
    'black' : '#fff';
    titleElement.style.color = currentColor;
}

// carrega o tema salvo no LocalStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
if(savedTheme){
    document.documentElement.classList.toggle('light', savedTheme === 
    'light');
}

// animação do título principal
// seleciona o elemento 'titulo' e define as variaveis para animação
const titleElement = document.querySelector('#name');
const text = "Isabela Paiola";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ?
'black' : '#fff';

// função apara animar o texto (digitando e apagando)
function animateText(){
    if(isTyping){
        if(index < text.length){
            titleElement.textContent = text.slice(0, index + 1);
            index ++;
        }else {
            isTyping = false;
        }
    } else {
        if (index > 1){
            titleElement.textContent = text.slice(0, index -1);
            index --;
        } else {
            isTyping = true;
            // alterna a cor entre preto e laranja
            currentColor = currentColor === (document.documentElement.
            classList.contains('light') ? 'black' : '#fff') ? '#C94c16' :
            (document.documentElement.classList('light') ? 'black' 
            : '#fff');
            titleElement.style.color = currentColor;
        }
    }
    setTimeout(animateText, 300);
}

// inicia a animação quando carrega a página
document.addEventListener('DOMContentLoaded', animateText);
updateTextColor();