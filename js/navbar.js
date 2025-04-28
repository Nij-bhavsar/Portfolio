/**
 * Navigation Bar JavaScript functionality
 * Author: Nij Bhavsar
 * Year: 2025
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  
  if (hamburger && navbar) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navbar.classList.toggle('active');
      
      // Prevent scrolling when menu is open
      if (navbar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navbar && navbar.classList.contains('active')) {
      if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Resume button functionality
  const resumeBtn = document.querySelector('.resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // In a real application, this would download the resume file
      // For this example, we'll just show an alert
      alert('Resume download functionality would be implemented here.');
      
      // Example of how to implement a download:
      // const link = document.createElement('a');
      // link.href = 'path/to/resume.pdf';
      // link.download = 'John_Doe_Resume.pdf';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    });
  }
});

// Add shrink class to header on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Highlight active menu item on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar ul li a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - 100)) {
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