import ScrollButton from '../common/ScrollButton';
import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';
import ColBookCard from '../common/bookCards/ColBookCard';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
const STYLES = {
  position: 'absolute',
  width: '2100px',
  height: '40px',
  top: '80%',
  color: '#222222',
};
const STYLES1 = {
  width: '14px',
  height: '40px',
  top: '80%',
  color: '#222222',
};
const STYLES2 = {
  position: 'absolute',
  background: '#d6d6d6',
  width: '1000px',
  height: '2px',
  top: '80%',
  color: 'red',
  zIndex: '50',
};

function NewBook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchNewBooks() {
      const newRecords = await pb.collection('posts').getFullList({
        sort: '-created',
        expand : 'user_id',
      });
      const filteredData = newRecords.slice(0, 8);
      setData(filteredData);
    }
    fetchNewBooks();
  }, []);

  return (
    <>
      <section className="text-center relative w-[1920px] h-[670px] m-auto">
        <h2 className="text-dibBlack text-[32px] not-italic font-normal leading-[normal] tracking-[-1.5px] m-5">
          신규 도서
        </h2>
        <strong className="text-dibBlack text-[20px] not-italic font-normal">
          새롭게 소개하는 도서를 여기서 만나보세요!
        </strong>
        <div className="w-[1200px] mx-auto">
          <div className="flex justify-center gap-6 my-10">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                type: 'progressbar',
                el:'.progressbar',
                renderProgressbar(progressbarFillClass) {
                  return `<span class="${progressbarFillClass}" style="background-color: #627D59;"></span>`;
                },
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper h-[600px] relative"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <ColBookCard
                    imgSrc={item.book_image_link}
                    imgAlt={item.book_title}
                    nickName={item.expand.user_id[0].nickname}
                    postTitle={item.post_title}
                    bookTitle={item.book_title}
                  />
                </SwiperSlide>
              ))}
              <div
                className="swiper-button-prev "
                style={STYLES}
                role="button"
                tabIndex={0}
                title="왼쪽"
              ></div>
              <div
                className="swiper-button-next "
                style={STYLES1}
                role="button"
                tabIndex={0 }
                title="오른쪽"
              ></div>
              <div className="progressbar" style={STYLES2}></div>
            </Swiper>
          </div>
        </div>
        <div>
          <ScrollButton />
        </div>
      </section>
    </>
  );
}

export default NewBook;
