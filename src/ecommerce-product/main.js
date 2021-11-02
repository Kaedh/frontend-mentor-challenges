const cartButton = document.querySelector(".cart-button");
const cartOverlay = document.querySelector(".cart-overlay")


cartButton.addEventListener('click', () => {
  cartOverlay.classList.toggle('visible')
  
});