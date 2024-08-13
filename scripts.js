document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextButton = document.querySelector('.nav-arrow.next');
    const prevButton = document.querySelector('.nav-arrow.prev');
    const dots = document.querySelector('.nav-dots');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = 'none';
            slide.style.opacity = 0;
        });

        slides[index].style.display = 'block';
        gsap.to(slides[index], { opacity: 1, duration: 1 });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        updateDots();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        updateDots();
    }

    function createDots() {
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('nav-dot');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            dots.appendChild(dot);
            dot.addEventListener('click', () => {
                currentIndex = i;
                showSlide(currentIndex);
                updateDots();
            });
        });
    }

    function updateDots() {
        document.querySelectorAll('.nav-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    createDots();
    showSlide(currentIndex); // Initial display

    // GSAP Animations for About Us Section
    gsap.fromTo(".animated-heading", 
        { y: -20, opacity: 0 }, // Initial state
        { y: 0, opacity: 1, duration: 1.5 } // Final state
    );
    gsap.from(".info-box", {
        scrollTrigger: ".about-us",
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.6,
        ease: "power1.out"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all links with hashes
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default anchor behavior

            const targetID = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});

window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
};

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const offsetPosition = targetSection.offsetTop - 80; // Adjust the '80' value as per the height of your nav

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});

