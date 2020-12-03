AOS.init();

$(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0:{
            items: 4,
        }
    }
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    items: 5,
    on: {
        init: function () {
            $('.swiper-slide-active .slider-content').addClass('active');
        },
        transitionStart: function() {
            $('.slider-content').removeClass('active');
        },
        transitionEnd: function(swiper) {
            $('.swiper-slide-active .slider-content').addClass('active');
        }
    }
});