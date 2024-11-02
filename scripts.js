document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextButton = document.querySelector('.nav-arrow.next');
    const prevButton = document.querySelector('.nav-arrow.prev');
    const dots = document.querySelector('.nav-dots');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => slide.style.display = i === index ? 'block' : 'none');
        gsap.to(slides[index], { opacity: 1, duration: 1 });
        updateDots();
    }

    function changeSlide(offset) {
        currentIndex = (currentIndex + offset + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function createDots() {
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('nav-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = i;
                showSlide(currentIndex);
            });
            dots.appendChild(dot);
        });
    }

    function updateDots() {
        document.querySelectorAll('.nav-dot').forEach((dot, i) => 
            dot.classList.toggle('active', i === currentIndex)
        );
    }

    nextButton.addEventListener('click', () => changeSlide(1));
    prevButton.addEventListener('click', () => changeSlide(-1));

    gsap.fromTo(".animated-heading", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 });
    gsap.from(".info-box", { scrollTrigger: ".about-us", opacity: 0, y: 50, stagger: 0.3, duration: 0.6, ease: "power1.out" });

    createDots();
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetID = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: "smooth" });
            }
        });
    });
});

window.onscroll = function() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
};
