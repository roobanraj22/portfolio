// ================================
// 🐦 VANTA Birds 3D Animated Background
// ================================
VANTA.BIRDS({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 300.00,
  minWidth: 300.00,
  scale: 1.00,
  scaleMobile: 1.00,
   // transparent background
  color1: 0xffc300,     // golden color for birds
  color2: 0xff5735,     // orange-red highlights
  birdSize: 2.50,
  wingSpan: 30.00,
  speedLimit: 4.00,
  separation: 50.00,
  alignment: 50.00,
  cohesion: 20.00,
  quantity: 3.00,
  
  
});

// ================================
// 🎯 Animate Skill Bars on Scroll
// ================================
const fills = document.querySelectorAll('.fill');

function animateSkills() {
  fills.forEach(fill => {
    const skillTop = fill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const percent = fill.getAttribute('data-percent');
    const span = fill.querySelector('span');

    if (skillTop < windowHeight - 50 && !fill.classList.contains('animated')) {
      fill.classList.add('animated');
      fill.style.width = percent + "%";
      
      // Animate percentage count
      let start = 0;
      const end = parseInt(percent);
      const duration = 1500;
      const step = Math.max(10, Math.floor(duration / end));

      const timer = setInterval(() => {
        start++;
        span.textContent = start + "%";
        if (start >= end) clearInterval(timer);
      }, step);
    }
  });
}

window.addEventListener('scroll', animateSkills);
animateSkills(); // Trigger once when loaded

// ================================
// ✨ Scroll Reveal Animation
// ================================
const revealElements = document.querySelectorAll('section, .cert-card, .project-card');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ================================
// 📜 Smooth Scrolling for Navigation
// ================================
const links = document.querySelectorAll('nav a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ================================
// 🔄 Header Background Scroll Effect
// ================================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
// ---------- Dark / Light toggle ----------
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn && toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
// ---------- Smooth scroll for nav ----------
document.querySelectorAll('nav .nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
// ---------- Skill bar animation on intersection ----------
const skillSpans = document.querySelectorAll('.skill-bar span');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const span = entry.target.querySelector('.skill-bar span');
      if(span) span.style.width = span.dataset.skill || span.style.width;
    }
  });
}, {threshold:0.25});
document.querySelectorAll('#skills .skill').forEach(s => skillObserver.observe(s));

// Set data-skill based on markup
skillSpans.forEach(s => {
  // already setup in markup via data-skill attribute; keep as-is
  // ensure CSS starts at 0 width (it does)
});
