const navBar = document.querySelector('.nav-menu');
const leftArrow = document.querySelector('.fa-arrow-left');


leftArrow.addEventListener('click', () => {
  navBar.classList.toggle('scale-y-100');
  leftArrow.classList.toggle('rotate-180');
  leftArrow.style.color = leftArrow.classList.contains('rotate-180') ? "#1f2937" : "#fb923c";


});


 const images = [
    "url('assets/Background-1.jpg')",
    "url('assets/Background-B.jpg')",
    "url('assets/Background-C.jpg')",
  ];

  let current = 0;
  const slider = document.getElementById("bg-slider");
  const dots = document.querySelectorAll(".dot");

  // Set initial background
  function updateBackground(index) {
    current = index;
    slider.style.backgroundImage = images[current];

    // Update active dot
    dots.forEach((dot, i) => {
      dot.style.opacity = i === current ? "1" : "0.5";
    });
  }

  // Auto-rotate every 10s
  setInterval(() => {
    let next = (current + 1) % images.length;
    updateBackground(next);
  }, 10000);

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateBackground(index);
    });
  });

  // Initialize
  updateBackground(0);