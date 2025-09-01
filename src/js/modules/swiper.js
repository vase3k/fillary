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

export default swiper;
