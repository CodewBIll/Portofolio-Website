
// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
const currentTheme = body.getAttribute('data-theme');
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
setTheme(newTheme);
localStorage.setItem('theme', newTheme);
});

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const cursor = document.querySelector('.cursor');
       document.addEventListener('mousemove', (e) => {
           cursor.style.left = `${e.clientX}px`;
           cursor.style.top = `${e.clientY}px`;
       });

       // Animate Skill Bars on Scroll
       const skillBars = document.querySelectorAll('.skill-progress');

       function animateSkillBars() {
           skillBars.forEach(bar => {
               const barPosition = bar.getBoundingClientRect().top;
               const screenPosition = window.innerHeight / 1.3;
               
               if (barPosition < screenPosition) {
                   const width = bar.getAttribute('data-width');
                   bar.style.width = width;
               }
           });
       }

       // Run once on page load
       animateSkillBars();
       
       // Run on scroll
       window.addEventListener('scroll', animateSkillBars);

       // Form Submission
       const contactForm = document.getElementById('contactForm');
       
       contactForm.addEventListener('submit', function(e) {
           e.preventDefault();
           
           // Get form values
           const name = document.getElementById('name').value;
           const email = document.getElementById('email').value;
           const subject = document.getElementById('subject').value;
           const message = document.getElementById('message').value;
           
           // Here you would typically send the form data to a server
           // For demo purposes, we'll just show an alert
           alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
           
           // Reset form
           contactForm.reset();
       });

       // Intersection Observer for Scroll Animations
       const fadeElements = document.querySelectorAll('.fade-in');
       
       const observerOptions = {
           threshold: 0.1,
           rootMargin: "0px 0px -50px 0px"
       };
       
       const observer = new IntersectionObserver(function(entries, observer) {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('animate');
                   observer.unobserve(entry.target);
               }
           });
       }, observerOptions);
       
       fadeElements.forEach(element => {
           observer.observe(element);
       });

       const projectCards = document.querySelectorAll('.project-card');
       
       projectCards.forEach(card => {
           card.addEventListener('mousemove', function(e) {
               const x = e.clientX - card.getBoundingClientRect().left;
               const y = e.clientY - card.getBoundingClientRect().top;
               
               const centerX = card.offsetWidth / 2;
               const centerY = card.offsetHeight / 2;
               
               const angleX = (y - centerY) / 20;
               const angleY = (centerX - x) / 20;
               
               card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
           });
           
           card.addEventListener('mouseleave', function() {
               card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
           });
       });

       // Typewriter Effect for Hero Section
       const heroTitle = document.querySelector('.hero h1');
       const originalText = heroTitle.textContent;
       const words = originalText.split(' ');
       const lastWord = words[words.length - 1];
       const baseText = words.slice(0, -1).join(' ');
       
       heroTitle.innerHTML = `${baseText} <span class="typewriter">${lastWord}</span>`;
       
       const typewriterElement = document.querySelector('.typewriter');
       const text = typewriterElement.textContent;
       typewriterElement.textContent = '';
       
       let i = 0;
       const typingSpeed = 150;
       
       function typeWriter() {
           if (i < text.length) {
               typewriterElement.textContent += text.charAt(i);
               i++;
               setTimeout(typeWriter, typingSpeed);
           } else {
               setTimeout(() => {
                   i = 0;
                   typewriterElement.textContent = '';
                   typeWriter();
               }, 3000);
           }
       }
       
       setTimeout(typeWriter, 1000);

       function createParticles() {
           const heroSection = document.querySelector('.hero');
           const particleCount = 50;
           
           for (let i = 0; i < particleCount; i++) {
               const particle = document.createElement('div');
               particle.classList.add('particle');
               
               const size = Math.random() * 5 + 2;
               const posX = Math.random() * 100;
               const posY = Math.random() * 100;
               const delay = Math.random() * 5;
               const duration = Math.random() * 10 + 10;
               const opacity = Math.random() * 0.5 + 0.1;
               
               particle.style.width = `${size}px`;
               particle.style.height = `${size}px`;
               particle.style.left = `${posX}%`;
               particle.style.top = `${posY}%`;
               particle.style.animationDelay = `${delay}s`;
               particle.style.animationDuration = `${duration}s`;
               particle.style.opacity = opacity;
               
               heroSection.appendChild(particle);
           }
       }

       window.addEventListener('load', createParticles);

       const style = document.createElement('style');
       style.textContent = `
           .particle {
               position: absolute;
               background-color: rgba(108, 99, 255, 0.5);
               border-radius: 50%;
               pointer-events: none;
               animation: float-up linear infinite;
           }
           
           @keyframes float-up {
               0% {
                   transform: translateY(0) translateX(0);
                   opacity: 1;
               }
               100% {
                   transform: translateY(-100vh) translateX(20px);
                   opacity: 0;
               }
           }
       `;
       document.head.appendChild(style);

window.addEventListener("load", function () {
    body.classList.add("saturate")
})   
