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
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    items: 5,
});