// Configuração do scroll do cabeçalho;

window.addEventListener("scroll", function () {
    let cabecalho = document.querySelector('#header');
    cabecalho.classList.toggle('rolagem', window.scrollY > 590);
})

// Configuração do carrossel card;

let base = 0;

document.getElementById('proximoCard').addEventListener('click', function () {
    const slidesCard = document.querySelectorAll('.cardSlide');
    if (base < slidesCard.length - 1) {
        base++;
        moverCartao();
    }
});

document.getElementById('cardAnterior').addEventListener('click', function () {
    if (base > 0) {
        base--;
        moverCartao();
    }
});

function moverCartao() {
    const slidesCard = document.querySelectorAll('.cardSlide');
    slidesCard.forEach(cardSlide => {
        cardSlide.style.marginLeft = `-${base * 500}px`;
    });
}

// Confiração do carrossel;

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(
    function () {
        proximaImagem();
    }, 4000
)

function proximaImagem() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

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