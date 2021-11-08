// cart 
const cartButton = document.querySelector(".cart-button");
const cartOverlay = document.querySelector(".cart-overlay");


// carrousel
const carrousel = document.querySelector(".gallery-carrousel-container");
const closeCarrousel = document.querySelector('.close-btn');
const thumbImages = document.querySelectorAll(".thumb-container");
const selectImage = document.querySelector(".selected-image");

// side menu
const openMenuIcon = document.querySelector(".menu-icon");
const closeSideMenuIcon = document.querySelector(".hidden-menu-close-btn");
const navList = document.querySelector(".nav-list");
const sideMenu = document.querySelector(".header-menu");

// increase/decrease amount
const amountLabel = document.querySelector(".amount");
const increaseAmountButton = document.querySelector(".increase-amount");
const decreaseAmountButton = document.querySelector(".decrease-amount");

increaseAmountButton.addEventListener('click', () => {
  const amountValueParsed = parseInt(amountLabel.textContent)
  amountLabel.textContent = amountValueParsed + 1
})

decreaseAmountButton.addEventListener('click', () => {
  const amountValueParsed = parseInt(amountLabel.textContent)

  if (amountValueParsed > 0 ) amountLabel.textContent = amountValueParsed - 1

  
})

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


selectImage.addEventListener('click', () => {
  carrousel.classList.toggle('visible')
})

/*
thumbImages.forEach( thumb => {
  thumb.addEventListener('click', () => {
    carrousel.classList.toggle('visible')
  }); 
})
*/

closeCarrousel.addEventListener('click', () => {
  carrousel.classList = 'gallery-carrousel-container'
})

// Adicionar produto ao carrinho
// carrinho vazio
// ao clicar na thumb mudar a imagem
// ao clicar na imagem grande aparecer o carrosel
// ao clicar nas setas do carrosel retroceder ou avançar imagem
// ao clicar na lixeira excluir do carrinho
// fechar carrosel apenas ao clicar no x