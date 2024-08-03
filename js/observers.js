const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
const aboutSection = document.querySelector(".about");
const projectsSection = document.querySelector(".projects");

const sectionOptions = {
  rootMargin: "-1% 0px -99% 0px"
};

// Change the active tab on the navbar while scrolling
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get current section
      const sectionName = entry.target.getAttribute('data-section');

      // Turn off the previous active tab and turn on the current active one
      header.getElementsByClassName('active')[0].classList.remove('active');
      header.getElementsByClassName(sectionName)[0].classList.add('active');
    }
  })
}, sectionOptions);

document.querySelectorAll('section').forEach((section) => {
  sectionObserver.observe(section);
});