// year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal using IntersectionObserver (smooth text-on-scroll effect) [web:38][web:31]
const reveals = document.querySelectorAll('.reveal');

const observerOptions = {
  threshold: 0.2
};

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      // once visible, you can unobserve for performance
      revealOnScroll.unobserve(entry.target);
    }
  });
}, observerOptions);

reveals.forEach(el => revealOnScroll.observe(el));
