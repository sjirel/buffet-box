import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

let bannerSLideshow = new Swiper('.banner-slideshow', {
    loop: true,
    effect: "fade",
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   ' of ' +
                   '<span class="' + totalClass + '"></span>';
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var shopoccasion = new Swiper(".shop-occasion-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    slidesPerView: 1.32,
    spaceBetween: 0,
    speed: 750,
    autoplay: {
        delay: 5000,
    },
    effect: "creative",
    initialSlide: '3',
    creativeEffect: {
        perspective: true,
        limitProgress: 10,
        prev: {
            translate: ['-90%', 30, -60],
            rotate: [0, 0, -5],
            origin: "center"
        },
        next: {
            translate: ['90%', 30, -60],
            rotate: [0, 0, 5],
            origin: "center"
        },
    },
    breakpoints: {
        768: {
            spaceBetween: 65,
            slidesPerView: 3,
        },
        1792: {
          spaceBetween: 65,
          slidesPerView: 3,
        },
    },
});


let bestSellers = new Swiper('.best-seller-slider', {
    loop: true,
    spaceBetween: 14,
    slidesPerView: 2,
    speed: 750,
    // autoplay: {
    //     delay: 5000,
    // },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 32,
            centeredSlides: true,
        }
    },
});

let testimonialsSliderTop = new Swiper('.js-testimonials-slider-top', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    speed: 8000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});

let testimonialsSliderBtm = new Swiper('.js-testimonials-slider-btm', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    speed: 8000,    
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
        pauseOnMouseEnter: true,
    },
});

console.log('here lies your code');