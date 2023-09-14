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
        slidesPerView={'auto'}
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
          col: 'white',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div className="bg-mainBanner1 w-screen  h-[500px] flex justify-center items-center mb-16 bg-no-repeat"></div> */}
          <img
            src={mainBanner1}
            alt="더 많은 개발 지식을 알고싶다
            dib 추천도서"
            className="inline-block w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="bg-red-200  h-[500px] bg-no-repeat"></div> */}
          <img
            src={mainBanner2}
            alt="더 많은 개발 지식을 알고싶다
            dib 추천도서"
            className="inline-block w-full"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainBanner;
