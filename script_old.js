// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    if(window.innerWidth > 768) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Add slight delay to blur for smoother trailing effect
        setTimeout(() => {
            cursorBlur.style.left = e.clientX + 'px';
            cursorBlur.style.top = e.clientY + 'px';
        }, 50);
    }
});

// Hover effect on links
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursor.style.background = 'transparent';
        cursor.style.border = '1px solid white';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'white';
        cursor.style.border = 'none';
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach((el) => {
    observer.observe(el);
});

// Typewriter Effect
const textArray = ["Intelligent Solutions.", "Embedded Systems.", "Full-Stack Web Apps.", "Computer Vision AI."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed /= 2; // Delete faster
    }

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500; // Pause before starting new word
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter after a short delay
setTimeout(typeWriter, 1000);

// Carousel Logic (AGMDM Project)
const carouselItems = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.carousel-indicators');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

if (carouselItems.length > 0) {
    let currentSlide = 0;

    // Create dots
    carouselItems.forEach((_, index) => {
        const dot = document.createElement('span');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-indicators span');

    function goToSlide(n) {
        carouselItems[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Pause video if it was playing
        if(carouselItems[currentSlide].tagName === 'VIDEO') {
            carouselItems[currentSlide].pause();
            carouselItems[currentSlide].currentTime = 0;
        }

        currentSlide = (n + carouselItems.length) % carouselItems.length;
        
        carouselItems[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Play video if new slide is video
        if(carouselItems[currentSlide].tagName === 'VIDEO') {
            carouselItems[currentSlide].play();
        }
    }

    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(7, 7, 9, 0.9)';
        nav.style.padding = '15px 24px';
    } else {
        nav.style.background = 'rgba(7, 7, 9, 0.7)';
        nav.style.padding = '20px 24px';
    }
});
