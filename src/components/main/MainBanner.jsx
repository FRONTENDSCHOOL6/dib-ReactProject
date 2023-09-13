import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import mainBanner1 from '@/assets/mainBanner1.png';
import mainBanner2 from '@/assets/mainBanner2.png';

function MainBanner() {
  const swiperRef = useRef(null);

  return (
    <section>
      <h2 className="sr-only">광고</h2>
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
            src={mainBanner1}
            alt="더 많은 개발 지식을 알고싶다
            dib 추천도서"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={mainBanner2}
            alt="개발자라면?
            개발자 필독도서는 못참지!"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainBanner;
