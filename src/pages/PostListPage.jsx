import { pb } from '@/api/pocketbase';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import PostListTitle from '@/components/postList/PostListTitle';
import PostWriteButton from '@/components/postList/PostWriteButton';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';

function PostListPage() {
  const { user } = useAuth();
  const [writtenData, setWrittenData] = useState([]);

  useEffect(() => {
    async function getUserData() {
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
        console.log(myWrittenReviews);
        setWrittenData(myWrittenReviews);
      }
    }

    getUserData();
  }, [user]);

  return (
    <div className="mb-[100px]">
      <PostListTitle />
      <div>
        <ul>
          {writtenData &&
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
            ))}
        </ul>
      </div>
      <PostWriteButton />
    </div>
  );
}

export default PostListPage;