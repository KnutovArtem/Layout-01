window.addEventListener('DOMContentLoaded', () => {

    let mySwiper;
    mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        effect: 'fade',
        slidesPerView: 1,
        /*        autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },*/
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

    });
});
