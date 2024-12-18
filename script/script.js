const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Função para atualizar o carrossel
function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    const offset = -(currentIndex * 100);
    carousel.style.transform = `translateX(${offset}%)`;
}

// Função para avançar o slide automaticamente
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

// Eventos dos botões
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Configurando o auto-play
const autoPlayInterval = setInterval(autoSlide, 3000); // Troca de slide a cada 3 segundos

// Inicialização
updateCarousel();
