document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in-section').forEach(el => {
    // Assign indexes immediately, not on intersect
    el.querySelectorAll('.fade-in-item, .fade-in-up, .fade-in-left, .fade-in-right')
      .forEach((child, i) => child.style.setProperty('--i', i));

    observer.observe(el);
  });
});