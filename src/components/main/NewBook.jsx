import ScrollButton from '../common/ScrollButton';
import { useRef,useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';
import ColBookCard from '../common/bookCards/ColBookCard';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function NewBook() {
  const swiperRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchNewBooks() {
      const newRecords = await pb.collection('posts').getFullList({
        sort: '-created',
      });
      const filteredData = newRecords.slice(0, 8);
      setData(filteredData);
    }
    fetchNewBooks();
  }, []);
  {
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
                rewind={true}
                navigation={true}
                modules={[Navigation, Scrollbar]}
                scrollbar={{
                  hide: true,
                }}
                className="mySwiper"
              >
                {data.map((item) => (
                  <li key={item.id}>
                    <ColBookCard
                      imgSrc={item.book_image_link}
                      imgAlt={item.book_title}
                      nickName={item.user_id[0]}
                      postTitle={item.post_title}
                      bookTitle={item.book_title}
                    />
                  </li>
                ))}
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
}

export default NewBook;
