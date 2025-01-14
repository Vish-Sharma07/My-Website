// Select all anchor tags in the navbar
const navLinks = document.querySelectorAll('.navigation-bar ul li a');

// Add event listeners for each link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Remove the "active" class from all links
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    
    // Add the "active" class to the clicked link
    e.target.classList.add('active');
    
    // If it's the Home link, you can trigger the scroll behavior
    if (e.target.textContent === "Home") {
      document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// js for adding active class
const homeLink = document.getElementById('home-link');

homeLink.addEventListener('click', () => {
    homeLink.classList.add('active');
});

