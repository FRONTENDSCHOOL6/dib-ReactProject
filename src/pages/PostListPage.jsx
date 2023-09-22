import { pb } from '@/api/pocketbase';
// import Spinner from '@/components/bookList/Spinner';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
// import PostList from '@/components/postList/PostList';
import PostListTitle from '@/components/postList/PostListTitle';
import PostWriteButton from '@/components/postList/PostWriteButton';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

function PostListPage() {
  const { user } = useAuth();
  const [isActive, setIsActive] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState([]);

  const [writtenData, setWrittenData] = useState([]);

  useEffect(() => {
    function fetchPostData() {
      if (user) {
        pb.collection('users')
          .getOne(user.id)
          .then((data) => {
            const written_posts = data['written_posts'];

            // 포스트 아이디를 가져와서 각각 객체에 넣기
            written_posts.map((postID) => {
              const post = pb.collection('posts').getOne(postID);
              post.then((data) => {
                data['isActive'] = isActive;
                data['setIsActive'] = setIsActive;
                console.log(postData.concat(data));
                setPostData(postData.concat(data));
              });
            });
          });
      }
    }
  }, []);

  useEffect(() => {
    const pb = new PocketBase('https://db-dib.pockethost.io');
    async function getUserData() {
      if (user) {
        const userIdData = await pb.collection('users').getOne(user.id, {
          expand: 'bookmark_posts',
        });

        const writtenPosts = userIdData.written_posts;

        const reviewData = await pb.collection('posts').getFullList({
          expandt: 'user_id',
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
                  nickName={item.user_id}
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
