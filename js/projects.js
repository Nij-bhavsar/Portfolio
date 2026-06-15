/**
 * Projects section JavaScript functionality
 * Author: Nij Bhavsar
 * Year: 2025
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100);
          } else if (card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // Project Cards Animation on Scroll
  const projectsSection = document.querySelector('.projects-section');
  
  if (projectsSection && projectCards.length) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateProjectCards();
        observer.unobserve(projectsSection);
      }
    }, { threshold: 0.2 });
    
    observer.observe(projectsSection);
    
    function animateProjectCards() {
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 150 * index);
      });
    }
    
    // Initialize styles
    projectCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.5s ease';
    });
  }
  
  // Project click -> open detail page
  const projectImages = document.querySelectorAll('.project-img');
  
  if (projectImages.length) {
    projectImages.forEach(img => {
      img.addEventListener('click', function() {
        const card = this.closest('.project-card');
        const slug = card ? card.getAttribute('data-slug') : null;
        if (slug) {
          window.location.href = `project-category/project-${slug}.html`;
        } else {
          const projectTitle = card.querySelector('.project-content h3').textContent;
          const projectDescription = card.querySelector('.project-content p').textContent;
          alert(`${projectTitle}\n\n${projectDescription}`);
        }
      });
    });
  }

  // Also make the whole card clickable (keeps same behavior)
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Prevent double navigation when clicking on links or buttons inside card
      const tag = e.target.tagName.toLowerCase();
      if (tag === 'a' || tag === 'button') return;
      const slug = this.getAttribute('data-slug');
      if (slug) window.location.href = `project-category/project-${slug}.html`;
    });
  });
  
});
