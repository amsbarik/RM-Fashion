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




///////////////////////////////// home page
// product slider js start 
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




// panjabi 3 items slide js start
document.querySelectorAll('.slider-3items-wrapper').forEach((sliderWrapper, index) => {
    const productCards = sliderWrapper.querySelectorAll('.product-card');
    const prevBtn = sliderWrapper.closest('.slider-3items-container').querySelector('.prev-btn');
    const nextBtn = sliderWrapper.closest('.slider-3items-container').querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    function slideTo(index) {
        const cardWidth = productCards[0].offsetWidth + 24; // Adjust according to product-card css margin 8*2=16 (margin: 0 8px;)
        const translateXValue = -(index * cardWidth);
        sliderWrapper.style.transform = `translateX(${translateXValue}px)`;

        if (index < productCards.length - 3) {
            sliderWrapper.style.transform += `translateX(-${cardWidth * 0.4}px)`;
        }

        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < productCards.length - 3) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(productCards.length - 3);
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


// testimonial-sliders js start
document.querySelectorAll('.testimonial-slider-wrapper').forEach((sliderWrapper, index) => {
    const productCards = sliderWrapper.querySelectorAll('.testimonial-card');
    const prevBtn = sliderWrapper.closest('.testimonial-slider-container').querySelector('.prev-btn');
    const nextBtn = sliderWrapper.closest('.testimonial-slider-container').querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    function slideTo(index) {
        const cardWidth = productCards[0].offsetWidth + 24; // Adjust according to product-card css margin 8*2=16 (margin: 0 8px;)
        const translateXValue = -(index * cardWidth);
        sliderWrapper.style.transform = `translateX(${translateXValue}px)`;

        if (index < productCards.length - 6) {
            sliderWrapper.style.transform += `translateX(-${cardWidth * 0.4}px)`;
        }

        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < productCards.length - 6) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(productCards.length - 6);
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




////////////////// store page js start
// <!-- store page filter see more or less js  -->
document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.readmore').forEach(function(link) {
    link.addEventListener('click', function() {
        var currentFilterBox = this.closest('.filter-box');
        document.querySelectorAll('.filter-box.show').forEach(function(fBox) {
            if (fBox !== currentFilterBox) {
                fBox.classList.remove('show');
            }
        });
        currentFilterBox.classList.toggle('show');
    });
});
});


// <!-- store page filter pirce range js start  -->
const rangevalue = document.querySelector(".price-slider-range .price-slider"); 
const rangeInputvalue = document.querySelectorAll(".range-input input"); 

// Set the price gap 
let priceGap = 100; 

// Adding event listners to price input elements 
const priceInputvalue = document.querySelectorAll(".price-input input"); 
for (let i = 0; i < priceInputvalue.length; i++) { 
priceInputvalue[i].addEventListener("input", e => { 

// Parse min and max values of the range input 
let minp = parseInt(priceInputvalue[0].value); 
let maxp = parseInt(priceInputvalue[1].value); 
let diff = maxp - minp 

if (minp < 0) { 
    alert("minimum price cannot be less than 0"); 
    priceInputvalue[0].value = 0; 
    minp = 0; 
} 

// Validate the input values 
if (maxp > 10000) { 
    alert("maximum price cannot be greater than 10000"); 
    priceInputvalue[1].value = 10000; 
    maxp = 10000; 
} 

if (minp > maxp - priceGap) { 
    priceInputvalue[0].value = maxp - priceGap; 
    minp = maxp - priceGap; 

    if (minp < 0) { 
        priceInputvalue[0].value = 0; 
        minp = 0; 
    } 
} 

// Check if the price gap is met 
// and max price is within the range 
if (diff >= priceGap && maxp <= rangeInputvalue[1].max) { 
    if (e.target.className === "min-input") { 
        rangeInputvalue[0].value = minp; 
        let value1 = rangeInputvalue[0].max; 
        rangevalue.style.left = `${(minp / value1) * 100}%`; 
    } 
    else { 
        rangeInputvalue[1].value = maxp; 
        let value2 = rangeInputvalue[1].max; 
        rangevalue.style.right = 
            `${100 - (maxp / value2) * 100}%`; 
        } 
    } 
}); 

// Add event listeners to range input elements 
for (let i = 0; i < rangeInputvalue.length; i++) { 
    rangeInputvalue[i].addEventListener("input", e => { 
        let minVal = 
            parseInt(rangeInputvalue[0].value); 
        let maxVal = 
            parseInt(rangeInputvalue[1].value); 

        let diff = maxVal - minVal 
        
        // Check if the price gap is exceeded 
        if (diff < priceGap) { 
        
            // Check if the input is the min range input 
            if (e.target.className === "min-range") { 
                rangeInputvalue[0].value = maxVal - priceGap; 
            } 
            else { 
                rangeInputvalue[1].value = minVal + priceGap; 
            } 
        } 
        else { 
        
            // Update price inputs and range progress 
            priceInputvalue[0].value = minVal; 
            priceInputvalue[1].value = maxVal; 
            rangevalue.style.left = 
                `${(minVal / rangeInputvalue[0].max) * 100}%`; 
            rangevalue.style.right = 
                `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
            } 
        }); 
    } 
}

// <!-- pirce range js end -->





///////////////////////////////// product details page js start
// product more img slider js start 
document.querySelectorAll('.thum-slider-wrapper').forEach((sliderWrapper, index) => {
    const productCards = sliderWrapper.querySelectorAll('.product-thum-card');
    const prevBtn = sliderWrapper.closest('.thum-slider-container').querySelector('.prev-btn');
    const nextBtn = sliderWrapper.closest('.thum-slider-container').querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    function slideTo(index) {
        const cardHeight = productCards[0].offsetHeight + 16; // Adjust according to product-thum-card css margin 8*2=16 (margin: 8px 0;)
        const translateYValue = -(index * cardHeight); // Regular translation for full cards
        sliderWrapper.style.transform = `translateY(${translateYValue}px)`;

        // Adjust for 30% of the next card on the bottom
        if (index < productCards.length - 4) {
            sliderWrapper.style.transform += `translateY(-${cardHeight * 0.2}px)`;
        }

        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < productCards.length - 4) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(productCards.length - 4);
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
