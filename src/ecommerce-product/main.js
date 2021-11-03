const cartButton = document.querySelector(".cart-button");
const cartOverlay = document.querySelector(".cart-overlay");
const carrousel = document.querySelector(".gallery-carrousel-container");
const closeCarrousel = document.querySelector('.close-btn');
const thumbImages = document.querySelectorAll(".thumb-container");



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