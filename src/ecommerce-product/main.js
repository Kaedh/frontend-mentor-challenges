const cartButton = document.querySelector(".cart-button");
const cartOverlay = document.querySelector(".cart-overlay");
const carrousel = document.querySelector(".gallery-carrousel-container");
const closeCarrousel = document.querySelector('.close-btn');
const thumbImages = document.querySelectorAll(".thumb-container");

const openMenuIcon = document.querySelector(".menu-icon");
const closeSideMenuIcon = document.querySelector(".hidden-menu-close-btn");
const navList = document.querySelector(".nav-list");
const sideMenu = document.querySelector(".header-menu");

openMenuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('visible')
  navList.classList.toggle('show-side-menu')
})

closeSideMenuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('visible')
  navList.classList.toggle('show-side-menu')
})


cartButton.addEventListener('click', () => {
  cartOverlay.classList.toggle('visible')
});

thumbImages.forEach( thumb => {
  thumb.addEventListener('click', () => {
    carrousel.classList.toggle('visible')
  }); 
} )

closeCarrousel.addEventListener('click', () => {
  carrousel.classList = 'gallery-carrousel-container'
})

// Botoes de adicionar ou remover quantidade
// Adicionar produto ao carrinho
// carrinho vazio
// menu lateral
// ao clicar na thumb mudar a imagem
// ao clicar na imagem grande aparecer o carrosel
// ao clicar nas setas do carrosel retroceder ou avançar imagem
// ao clicar na lixeira excluir do carrinho
// quando clicar no menu hamburguer abrir o menu lateral
// quando clicar no x do menu lateral fechar menu hamburguer
// fechar carrosel apenas ao clicar no x