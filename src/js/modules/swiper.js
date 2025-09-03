import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.mySwiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    navigation: { nextEl: '.custom-next', prevEl: '.custom-prev' },
    initialSlide: 2,
});

const swiperPromo = new Swiper('.events__swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.events__swiper .custom-next',
        prevEl: '.events__swiper .custom-prev',
    },
});
