import { pb } from '@/api/pocketbase';
import Spinner from '@/components/bookList/Spinner';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import PostListTitle from '@/components/postList/PostListTitle';
import PostWriteButton from '@/components/postList/PostWriteButton';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';

function PostListPage() {
  const { user } = useAuth();
  const [writtenData, setWrittenData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getUserData() {
      setIsLoading(true);
      if (user) {
        const userIdData = await pb.collection('users').getOne(user.id, {
          expand: 'bookmark_posts',
        });

        const writtenPosts = userIdData.written_posts;

        const reviewData = await pb.collection('posts').getFullList({
          expand: 'user_id',
        });

        const myWrittenReviews = reviewData.filter((review) =>
          writtenPosts.includes(review.id)
        );
        setWrittenData(myWrittenReviews);
      }
      setIsLoading(false);
    }
    getUserData();
  }, [user]);

  return (
    <div className="w-[1920px] m-auto mb-[100px]">
      <PostListTitle />
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <ul
          id="tab-panel-1"
          aria-labelledby="tab-1"
          className="w-[1200px] m-auto flex flex-wrap gap-x-6 gap-y-10 justify-start mt-16 mb-20"
        >
          {writtenData.length > 0 ? (
            writtenData.map((item) => (
              <li key={item.id}>
                <ColBookCard
                  imgSrc={item.book_image_link}
                  imgAlt={item.book_title}
                  nickName={item.expand.user_id[0].nickname}
                  postTitle={item.post_title}
                  bookTitle={item.book_title}
                />
              </li>
            ))
          ) : (
            <p className="w-[1920px] m-auto text-dibGray text-center font-Pretendard text-[20px] font-normal leading-normal tracking-tighter pt-14 pb-14">
            작성하신 글이 없습니다! <br/> 여러분의 추천책을 공유해주세요!
          </p>
          )}
        </ul>
        )}
      </div>
      <PostWriteButton />
    </div>
  );
}

export default PostListPage;
