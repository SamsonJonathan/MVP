// script.js

// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.row-left a');
const cartCount = document.querySelector('.ri-shopping-cart-2-line');

let cartItems = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    cartItems++;
    cartCount.setAttribute('data-count', cartItems);
    alert('Item added to cart!');
  });
});

// Scroll animation for product cards
const productCards = document.querySelectorAll('.row');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight;
  
  productCards.forEach(card => {
    if (card.getBoundingClientRect().top + window.scrollY < scrollPos) {
      card.classList.add('fadeIn');
    }
  });
});
