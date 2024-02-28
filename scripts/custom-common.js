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
    centeredSlidesBounds: true,
    navigation: {
        nextEl: ".shop-carousel__control--next",
        prevEl: ".shop-carousel__control--prev",
    },
    slidesPerView: 3,
    spaceBetween: 50,
    speed: 750,
    autoplay: {
        delay: 5000,
    },
    effect: "creative",
    initialSlide: '3',
    creativeEffect: {
        perspective: true,
        limitProgress: 5,
        prev: {
            translate: ['-90%', 30, -100],
            rotate: [0, 0, -5],
            origin: "center"
        },
        next: {
            translate: ['90%', 30, -100],
            rotate: [0, 0, 5],
            origin: "center"
        },
    },
    breakpoints: {
        1792: {
          spaceBetween: 100,
        },
      },
});


let bestSellers = new Swiper('.best-seller-slider', {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 750,
    autoplay: {
        delay: 5000,
    },
    centeredSlidesBounds: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let testimonialsSliderTop = new Swiper('.js-testimonials-slider-top', {
    loop: true,
    spaceBetween: 30,
    speed: 750,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 'auto',
});

let testimonialsSliderBtm = new Swiper('.js-testimonials-slider-btm', {
    loop: true,
    spaceBetween: 30,
    speed: 750,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 'auto',
});

console.log('here lies your code');