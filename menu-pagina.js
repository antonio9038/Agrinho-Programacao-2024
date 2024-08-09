// Configuração do scroll do cabeçalho;

window.addEventListener("scroll", function () {
    let cabecalho = document.querySelector('#header');
    cabecalho.classList.toggle('rolagem', window.scrollY > 590);
})

// Menu mobile;

let btnMenu = document.getElementById('btnMenu');
let Menu = document.getElementById('menuMobile');
let overlay = document.getElementById('overlayMenu');

btnMenu.addEventListener('click', () => {
    Menu.classList.add('abrir-menu')
}
)

Menu.addEventListener('click', () => {
    Menu.classList.remove('abrir-menu')
}
)

overlay.addEventListener('click', () => {
    Menu.classList.remove('abrir-menu')
}
)