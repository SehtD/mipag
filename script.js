document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselImages = document.querySelector('.carousel-images');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    let currentIndex = 0;
    let autoplayInterval;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    prevButton.addEventListener('click', () => {
        stopAutoplay(); // Pausa el autoplay
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
        startAutoplay(); // Reinicia el autoplay
    });

    nextButton.addEventListener('click', () => {
        stopAutoplay(); // Pausa el autoplay
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
        startAutoplay(); // Reinicia el autoplay
    });

    // Inicia el autoplay al cargar la página
    startAutoplay();
});
