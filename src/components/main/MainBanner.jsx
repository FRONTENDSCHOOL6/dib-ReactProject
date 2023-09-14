import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { useRef, useState } from 'react';
import mainBanner1 from '@/assets/mainBanner1.png';
import mainBanner2 from '@/assets/mainBanner2.png';
const STYLES = {
  top: '92%',
  left: '35%',
  color: 'white',
};
const STYLES1 = {
  top: '92%',
  right: '35%',
  color: 'white',
};
const STYLES2 = {
  background: '#d6d6d6',
  rounded: '2px',
  height: '2px',
  width: '300px',
  bottom: '50px',
  left: '50%',
  transform: 'translateX(-50%)',
};
function MainBanner() {
  const swiperRef = useRef(null);
  const [autoplayState, setAutoplayState] = useState(true);

  const handleAutoplayToggle = () => {
    setAutoplayState(!autoplayState);
    if (swiperRef.current && swiperRef.current.swiper) {
      const { autoplay } = swiperRef.current.swiper;
      if (autoplay) {
        if (autoplay.running) {
          autoplay.stop();
        } else {
          autoplay.start();
        }
      }
    }
  };

  return (
    <section>
      <h2 className="sr-only">광고</h2>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        scrollbar={{
          hide: false,
          el: '.swiper-scrollbar',
          draggable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Navigation, Scrollbar]}
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
        <div
          className="swiper-button-prev "
          style={STYLES}
          role="button"
          tabIndex={0}
          ></div>
        <div
          className="swiper-button-next "
          style={STYLES1}
          role="button"
          tabIndex={0}
          ></div>
        <div className='flex relative'>
        <div className="swiper-scrollbar" style={STYLES2}></div>
        <button onClick={handleAutoplayToggle} className='absolute z-[100] left-[60%] bottom-11'>
          {autoplayState ? (
            <img src="/Pause.svg" alt="정지" aria-hidden />
          ) : (
            <img src="/Play.svg" alt="재생" aria-hidden />
          )}
        </button>
        </div>
          </Swiper>
    </section>
  );
}

export default MainBanner;
