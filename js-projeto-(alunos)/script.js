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

