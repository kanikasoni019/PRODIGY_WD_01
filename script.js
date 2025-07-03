// Get the navbar element
const navbar = document.getElementById('navbar');

// Listen for scroll event
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    // Add 'scrolled' class when page is scrolled 50px or more
    navbar.classList.add('scrolled');
  } else {
    // Remove 'scrolled' class when near top
    navbar.classList.remove('scrolled');
  }
});
