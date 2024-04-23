import Swiper from 'swiper/bundle';
import easydropdown from 'easydropdown';
// import 'swiper/css/bundle';

let pdpDropdn = document.querySelectorAll('.product-form__input .select__select');

pdpDropdn.forEach((item)=>{
    easydropdown(item);
});

let relatedProductItemsSlider = new Swiper('.js-related-products-slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 8000,    
});

const heroBannerProductMainSlider = new Swiper('.js-banner-product-main-slider', {
    slidesPerView: 1,
    speed: 1500, 
    rewind: true,
    grabCursor: true,
    effect: "creative",
    navigation: {
        nextEl: '.hero-banner .swiper-button-next',
        prevEl: '.hero-banner .swiper-button-prev',
    },
    pagination: {
        el: ".hero-banner .swiper-pagination",
        type: "fraction",
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
    }
});

const heroBannerBigProductTitleSlider = new Swiper('.js-banner-big-product-title-slider', {
    slidesPerView: 1,
    speed: 1500,
    rewind: true,   
});
heroBannerProductMainSlider.controller.control = [heroBannerBigProductTitleSlider]; 
heroBannerBigProductTitleSlider.controller.control = [heroBannerProductMainSlider];

var shopoccasion = new Swiper(".shop-occasion-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1.32,
    spaceBetween: 0,
    speed: 750,
    autoplay: {
        delay: 5000,
    },
    effect: "creative",
    initialSlide: '3',
    preventClicks: false,
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
          slidesPerView: 3.5,
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



var thumnailSlider = new Swiper(".thumnail-slider", {
    spaceBetween: 10,
    slidesPerView: 2,
    speed: 750,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        750: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        990: {
            slidesPerView: 5,
            spaceBetween: 23,
        }
    },
});
var mainSliderWithThumb = new Swiper(".main-slider-with-thumb", {
    spaceBetween: 10,
    speed: 750,
    navigation: {
        nextEl: ".outer-thumnail-slider .swiper-button-next",
        prevEl: ".outer-thumnail-slider .swiper-button-prev",
    },
    thumbs: {
        swiper: thumnailSlider,
    },
});