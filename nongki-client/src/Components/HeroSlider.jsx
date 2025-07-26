import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import foto1 from '../assets/hero (1).jpg';
import foto2 from '../assets/hero (2).jpg';
import foto3 from '../assets/hero (3).jpg';
import foto4 from '../assets/hero (4).jpg';

const HeroSlider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className='hero-slider'
        >
            <SwiperSlide>
                <img src={foto1} alt="Hero Image 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={foto2} alt="Hero Image 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={foto3} alt="Hero Image 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={foto4} alt="Hero Image 4" />
            </SwiperSlide>
            </Swiper>
    );
};

export default HeroSlider;