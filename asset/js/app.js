//  categories slide js  start
// const sliderWrapper = document.querySelector('.slider-wrapper');
// const productCards = document.querySelectorAll('.product-card');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// let currentIndex = 0;
// let slideInterval;

// // Function to slide cards
// function slideTo(index) {
//     const cardWidth = productCards[0].offsetWidth + 16; // Adjust according to product-card css margin 8*2=16 (margin: 0 8px;)
//     const translateXValue = -(index * cardWidth); // Regular translation for full cards
//     sliderWrapper.style.transform = `translateX(${translateXValue}px)`;

//     // Adjust for 30% of the next card on the right
//     if (index < productCards.length - 4) {
//         sliderWrapper.style.transform += `translateX(-${cardWidth * 0.2}px)`;
//     }

//     currentIndex = index;
// }

// // Function to go to the next card
// function nextSlide() {
//     if (currentIndex < productCards.length - 4) {
//         // adjust card qty for each slide 
//         slideTo(currentIndex + 1);
//     } else {
//         slideTo(0);
//     }
// }

// // Function to go to the previous card
// function prevSlide() {
//     if (currentIndex > 0) {
//         // adjust card qty for each slide
//         slideTo(currentIndex - 1);
//     } else {
//         slideTo(productCards.length - 4);
//     }
// }

// // Event Listeners for buttons
// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// // Auto-slide functionality
// function startAutoSlide() {
//     slideInterval = setInterval(nextSlide, 3000); // Adjust interval as needed
// }

// function stopAutoSlide() {
//     clearInterval(slideInterval);
// }

// sliderWrapper.addEventListener('mouseover', stopAutoSlide);
// sliderWrapper.addEventListener('mouseout', startAutoSlide);

// // Initialize the slider
// startAutoSlide();
// slideTo(0); // Start with the first card showing

// categories slide js  end






document.querySelectorAll('.slider-wrapper').forEach((sliderWrapper, index) => {
    const productCards = sliderWrapper.querySelectorAll('.product-card');
    const prevBtn = sliderWrapper.closest('.slider-container').querySelector('.prev-btn');
    const nextBtn = sliderWrapper.closest('.slider-container').querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    function slideTo(index) {
        const cardWidth = productCards[0].offsetWidth + 24; // Adjust according to product-card css margin 8*2=16 (margin: 0 8px;)
        const translateXValue = -(index * cardWidth);
        sliderWrapper.style.transform = `translateX(${translateXValue}px)`;

        if (index < productCards.length - 5) {
            sliderWrapper.style.transform += `translateX(-${cardWidth * 0.4}px)`;
        }

        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < productCards.length - 5) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(productCards.length - 5);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // Adjust interval as needed
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    sliderWrapper.addEventListener('mouseover', stopAutoSlide);
    sliderWrapper.addEventListener('mouseout', startAutoSlide);

    startAutoSlide();
    slideTo(0); // Start with the first card showing
});

