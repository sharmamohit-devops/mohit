const navItems = document.querySelectorAll('.nav ul li');
if (navItems.length > 0) {
  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (item.textContent.trim().toLowerCase() === 'skills') {
        const skillsSection = document.querySelector('.skills');
        if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (item.textContent.trim().toLowerCase() === 'education') {
        const educationSection = document.querySelector('.education_section');
        if (educationSection) {
          educationSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (item.textContent.trim().toLowerCase() === 'contact') {
        const contactSection = document.querySelector('.contact-us');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (item.textContent.trim().toLowerCase() === 'project') {
        const projectsSection = document.querySelector('.project_section');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function animateEducationItems() {
  const educationItems = document.querySelectorAll('.education-item');
  educationItems.forEach((item) => {
  if (isInViewport(item)) {
    item.classList.add('visible');
  }
  });
}


window.addEventListener('scroll', animateEducationItems);
window.addEventListener('load', animateEducationItems);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function animateEducationItems() {
  const educationItems = document.querySelectorAll('.education-item');
  educationItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('visible');
    }
  });
}


window.addEventListener('scroll', animateEducationItems);
window.addEventListener('load', animateEducationItems);

