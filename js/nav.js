const primaryNav = document.querySelector('.primary-navigation');
const menuToggle = document.querySelector('.menu-btn');
const navTabs = primaryNav.querySelectorAll('li');

// Add event listeners

// Click on menu
menuToggle.addEventListener('click', toggleNav);

// Click on a link
navTabs.forEach((navTab) => {
  navTab.addEventListener('click', closeNav);
});

// Click outside of nav
document.addEventListener('click', (e) => {
  if (e.target === primaryNav || e.target === menuToggle) {
    return;
  }

  if (navIsVisible()) {
    closeNav();
  }
});

function navIsVisible() {
  return primaryNav.getAttribute('data-visible') === 'true';
}

function toggleNav() {
  if (!navIsVisible()) {
    primaryNav.setAttribute('data-visible', true);
    menuToggle.setAttribute('aria-expanded', true);
  } else {
    closeNav();
  }
};

function closeNav() {
  primaryNav.setAttribute('data-visible', false);
  menuToggle.setAttribute('aria-expanded', false);
}