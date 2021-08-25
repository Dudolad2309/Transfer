const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: '.slider__pagination',
        clickable: true
    }
});