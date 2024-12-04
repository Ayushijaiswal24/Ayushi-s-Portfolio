window.onload = () => {
    const heroContent = document.querySelector('.hero-content');
  
    // Fade-in and slide-up effect for hero content
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      } else {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
      }
    });
  
    // Button hover effect
    const buttons = document.querySelectorAll('.cta-buttons a');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
    });
  };
// Fade-in effect for project cards on scroll
window.addEventListener('scroll', () => {
    const projects = document.querySelectorAll('.project-card');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
  
    projects.forEach(project => {
      const cardTop = project.getBoundingClientRect().top + scrollY;
      if (cardTop < windowHeight + scrollY - 100) {
        project.style.opacity = '1';
        project.style.transform = 'translateY(0)';
      } else {
        project.style.opacity = '0';
        project.style.transform = 'translateY(50px)';
      }
    });
  });
    