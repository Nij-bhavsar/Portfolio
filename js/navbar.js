/**
 * Navigation Bar JavaScript functionality
 * Author: Nij Bhavsar
 * Year: 2025
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  if (hamburger && navbar) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      navbar.classList.toggle('active');

      document.body.style.overflow = navbar.classList.contains('active')
        ? 'hidden'
        : '';
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    if (navbar && navbar.classList.contains('active')) {
      if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ✅ REAL Resume Download Functionality
  const resumeBtn = document.querySelector('.resume-btn');

  if (resumeBtn) {
    resumeBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const filePath = 'assets/Nij_Bhavsar_Resume.pdf'; // 👈 correct path
      const fileName = 'Nij_Bhavsar_Resume.pdf';

      const link = document.createElement('a');
      link.href = filePath;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});

// Shrink header on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Highlight active menu item on scroll
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
