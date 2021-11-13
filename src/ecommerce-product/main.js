// cart 
const cartButton = document.querySelector(".cart-button");
const cartOverlay = document.querySelector(".cart-overlay");

cartButton.addEventListener('click', () => {
  cartOverlay.classList.toggle('visible')
});


// carrousel
const carrousel = document.querySelector(".gallery-carrousel-container");
const closeCarrousel = document.querySelector('.close-btn');
const thumbImages = document.querySelectorAll(".thumb-img");
const selectImage = document.querySelector(".selected-image");

const thumbs = {
  1 : './assets/image-product-1.jpg',
  2 : './assets/image-product-2.jpg',
  3 : './assets/image-product-3.jpg',
  4 : './assets/image-product-4.jpg'
}

selectImage.addEventListener('click', () => {
  carrousel.classList.toggle('visible')
})

/
thumbImages.forEach( thumb => {
  thumb.addEventListener('click', () => {
    selectImage.src = thumbs[thumb.id]
    
  }); 
})


closeCarrousel.addEventListener('click', () => {
  carrousel.classList = 'gallery-carrousel-container'
})

// side menu
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

// Adicionar produto ao carrinho
// carrinho vazio
// ao clicar na thumb mudar a imagem
// ao clicar nas setas do carrosel retroceder ou avançar imagem
// ao clicar na lixeira excluir do carrinho