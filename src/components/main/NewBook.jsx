import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';
import { useAuth } from '@/contexts/AuthContext';
import ColBookCard from '../common/bookCards/ColBookCard';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import toast from 'react-hot-toast';

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
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchNewBooks() {
      const newRecords = await pb.collection('posts').getFullList({
        sort: '-created',
        expand: 'user_id',
      });
      const filteredData = newRecords.slice(0, 8);
      setData(filteredData);
    }
    fetchNewBooks();
  }, []);

  const handleLikeToggle = async (postId) => {
    if (!user) {
      toast('북마크 기능은 로그인 사용자만 가능합니다.', {
        icon: '🙏🏻',
      });
      return;
    } else {
      const updatedLikedPosts = [...user.liked_posts];
      const postIdIndex = updatedLikedPosts.indexOf(postId);
      if (postIdIndex !== -1) {
        updatedLikedPosts.splice(postIdIndex, 1);
      } else {
        updatedLikedPosts.push(postId);
      }
      const updatedUserData = {
        liked_posts: updatedLikedPosts,
      };

      try {
        await pb.collection('users').update(user.id, updatedUserData);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  };

  const handleBookmarkToggle = async (postId) => {
    if (!user) {
      toast('하트 기능은 로그인 사용자만 가능합니다.', {
        icon: '🙏🏻',
      });
      return;
    } else {
      const updataBookmarkPosts = [...user.bookmark_posts];
      const postIdIndex = updataBookmarkPosts.indexOf(postId);
      if (postIdIndex !== -1) {
        updataBookmarkPosts.splice(postIdIndex, 1);
      } else {
        updataBookmarkPosts.push(postId);
      }
      const updateUserBookmarkData = {
        bookmark_posts: updataBookmarkPosts,
      };

      try {
        await pb.collection('users').update(user.id, updateUserBookmarkData);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  };

  return (
    <>
      <section className="text-center relative w-[1920px] h-[670px] m-auto pt-10">
        <h2 className="text-dibBlack text-[32px] not-italic font-normal leading-[normal] tracking-[-1.5px] m-5">
          신규 도서
        </h2>
        <strong className="text-dibBlack text-[20px] not-italic font-normal">
          새롭게 소개하는 도서를 여기서 만나보세요!
        </strong>
        <div className="w-[1200px] mx-auto">
          <div className="flex justify-center gap-6 my-10">
            <Swiper
              loop={true}
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                type: 'progressbar',
                el: '.progressbar',
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
              {data &&
                data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ColBookCard
                      imgSrc={item.book_image_link}
                      imgAlt={item.book_title}
                      nickName={item.expand.user_id[0].nickname}
                      postTitle={item.post_title}
                      bookTitle={item.book_title}
                      bookmarkClick={() => handleBookmarkToggle(item.id)}
                      bookmarkRander={
                        user ? user?.bookmark_posts?.includes(item.id) : false
                      }
                      heaetClick={() => handleLikeToggle(item.id)}
                      heartRander={
                        user ? user?.liked_posts?.includes(item.id) : false
                      }
                      bookID={item.id}
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
                tabIndex={0}
                title="오른쪽"
              ></div>
              <div className="progressbar" style={STYLES2}></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewBook;
