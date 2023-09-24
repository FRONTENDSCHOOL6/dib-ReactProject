import { pb } from '@/api/pocketbase';
import ColBookCard from '../common/bookCards/ColBookCard';
import Spinner from '../bookList/Spinner';
import PropTypes from 'prop-types';
import { useAuth } from '@/contexts/AuthContext';
// import { usePbData } from '@/contexts/PbDataContext';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function BestBook({ isLoading }) {
  // const { bookData } = usePbData();
  const [data, setData] = useState([]);
  const { user } = useAuth();

  // useEffect(() => {
  //   pb.autoCancellation(false);
  //   async function fetchBestBooks() {
  //     const bestRecord = await pb.collection('posts').getFullList({
  //       sort: '-like_count',
  //       expand: 'user_id',
  //     });
  //     // 상위 4개의 데이터만 필터링
  //     const filteredData = bestRecord.slice(0, 4);
  //     setData(filteredData);
  //     setIsLoading(false);
  //   }

  //   fetchBestBooks();
  // }, []);

  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchNewBooks() {
      const newRecords = await pb.collection('posts').getFullList({
        sort: '-like_count',
        expand: 'user_id',
      });
      const filteredData = newRecords.slice(0, 4);
      setData(filteredData);
    }
    fetchNewBooks();
  }, []);

  const handleBookmarkToggle = async (postId) => {
    if (!user) {
      toast('북마크 기능은 로그인 사용자만 가능합니다.', {
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

  const handleLikeToggle = async (postId) => {
    if (!user) {
      toast('하트 기능은 로그인 사용자만 가능합니다.', {
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

  return (
    <>
      <section className="text-center w-[1920px] h-[670px] m-auto flex flex-col mb-[60px]">
        <h2 className="text-dibBlack text-[32px] not-italic font-normal leading-[normal] tracking-[-1.5px] mt-[60px] mb-[20px]">
          베스트 도서
        </h2>
        <strong className="text-dibBlack text-[20px] not-italic font-normal">
          dib에서 가장 인기있는 책을 소개합니다!!
        </strong>
        <div className="w-[1200px] mx-auto">
          {isLoading ? (
            <Spinner />
          ) : (
            <ul className="flex justify-center gap-6 my-10">
              {data &&
                data.map((item) => (
                  <li key={item.id}>
                    <ColBookCard
                      imgSrc={item.book_image_link}
                      imgAlt={item.book_title}
                      userId={item?.expand?.user_id[0]?.id}
                      profileImage={item?.expand?.user_id[0]?.profileImage}
                      nickName={item?.expand?.user_id[0]?.nickname}
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
                  </li>
                ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default BestBook;

BestBook.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};
