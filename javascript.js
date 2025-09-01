// Sticky Header
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  // Change icon (bars <-> times)
  const icon = hamburger.querySelector("i");
  if (mobileMenu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    hamburger.querySelector("i").classList.remove("fa-times");
    hamburger.querySelector("i").classList.add("fa-bars");
  });
});




// ==================
// Sticky Header
// ==================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// ==================
// Smooth Scroll + Active Nav
// ==================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
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

// ==================
// Testimonials Slider
// ==================
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

function showTestimonial(n) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    dotsContainer.children[i].classList.remove('active');
  });
  testimonials[n].classList.add('active');
  dotsContainer.children[n].classList.add('active');
  index = n;
}
function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}
function prevTestimonialFn() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
}

// Create dots
testimonials.forEach((t, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showTestimonial(i));
  dotsContainer.appendChild(dot);
});

// Auto play
let slider = setInterval(nextTestimonial, 5000);
const sliderContainer = document.querySelector('.testimonial-slider');
sliderContainer.addEventListener('mouseover', () => clearInterval(slider));
sliderContainer.addEventListener('mouseout', () => slider = setInterval(nextTestimonial, 5000));

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonialFn);

// ==================
// FAQ Accordion
// ==================
const accordions = document.querySelectorAll('.accordion-item');
accordions.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
    accordions.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
  });
});
