import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
function MainBanner() {
    const swiperRef = useRef(null)
    
return (
    <section>
    <h2 className='sr-only'>메인 베너</h2>
    <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        }}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        
        <SwiperSlide>
        <img
            src="/MainBanner1.png"
            alt="더 많은 개발 지식을 알고싶다
            dib 추천도서"
        />
        </SwiperSlide>
        <SwiperSlide>
        <img
            src="/MainBanner2.png"
            alt="개발자라면?
            개발자 필독도서는 못참지!"
        />
        </SwiperSlide>
    </Swiper>    
    </section>
    );
}

export default MainBanner;
