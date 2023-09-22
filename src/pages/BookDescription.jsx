import PostBookInfo from '@/components/userPost/PostBookInfo';
import PostTitle from '@/components/userPost/PostTitle';
import PostMain from '@/components/userPost/PostMain';
import CommentsLayout from '@/components/userPost/CommentsLayout';
import PocketBase from 'pocketbase';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDescription() {
  const { id } = useParams();

  const [writeComment, setWriteComment] = useState('');
  const [reviewData, setReviewData] = useState(null);
  const [putHeart, setPutHerart] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    async function renderReviewPage() {
      const pb = new PocketBase('https://db-dib.pockethost.io');
      try {
        const record = await pb.collection('posts').getOne(id, {
          expand: 'user_id',
        });
        setReviewData(record);
        console.log(record);
      } catch (error) {
        throw new Error(error.message);
      }
    }

    renderReviewPage();
  }, []);

  const handleWriteComment = (event) => {
    setWriteComment(event.target.value);
  };

  const handleClickHeart = async () => {
    const pb = new PocketBase('https://db-dib.pockethost.io');
    const data = {
      user_id: [reviewData.user_id.nickname],
      book_title: reviewData.book_title,
      author: reviewData.author,
      publisher: reviewData.publisher,
      post_title: reviewData.post_title,
      post_contents: reviewData.post_contents,
      category: [...reviewData.category],
      like_count: likeCount,
      book_image_link: reviewData.book_image_link,
    };

    if (!putHeart) {
      data.like_count += 1;
    } else {
      data.like_count -= 1;
    }

    try {
      const record = await pb
        .collection('posts')
        .update('xd64yi7yecy272v', data);
      console.log(record);
      setLikeCount(data.like_count);
      setPutHerart(!putHeart);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleClickPostComment = async (event) => {
    event.preventDefault();
    const data = {
      user_id: ['1u8j85zmyjckzwl'],
      comment_contents: writeComment,
    };

    const pb = new PocketBase('https://db-dib.pockethost.io');
    try {
      const record = await pb.collection('comments').create(data);
      if (record) {
        toast.success('댓글 저장에 성공하였습니다! 🚀');
      } else {
        toast.error('서버와의 통신에 문제가 발생하였습니다. ❌');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      {reviewData && (
        <>
          <PostBookInfo
            author={reviewData.author}
            title={reviewData.book_title}
            bookImage={reviewData.book_image_link}
            publisher={reviewData.publisher}
          />
          <PostTitle
            userImg={userImage}
            postTitle={reviewData.post_title}
            userName={reviewData.expand.user_id[0].nickname}
            createDate={reviewData.created}
          />
          <PostMain mainText={reviewData.post_contents} />
          <CommentsLayout
            onClick={handleClickPostComment}
            onChange={handleWriteComment}
            handleHeart={handleClickHeart}
            putHeart={putHeart}
          />
        </>
      )}
    </>
  );
}

export default BookDescription;