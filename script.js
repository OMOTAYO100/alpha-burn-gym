const navBar = document.querySelector('.nav-menu');
const leftArrow = document.querySelector('.fa-arrow-left');


leftArrow.addEventListener('click', () => {
  navBar.classList.toggle('scale-y-100');
  leftArrow.classList.toggle('rotate-180');
  leftArrow.style.color = leftArrow.classList.contains('rotate-180') ? "#1f2937" : "#fb923c";


});


