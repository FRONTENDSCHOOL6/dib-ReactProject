import PostBookInfo from '@/components/userPost/PostBookInfo';
import PostTitle from '@/components/userPost/PostTitle';
import PostMain from '@/components/userPost/PostMain';
import CommentsLayout from '@/components/userPost/CommentsLayout';
import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import debounce from '@/utils/debounce';
import { pb } from '@/api/pocketbase';
import { showErrorAlert, showSuccessAlert } from '@/utils/showAlert';
import { useAuth } from '@/contexts/AuthContext';

function BookDescription() {
  const { id } = useParams();
  //특정게시물의 아이디
  const { user } = useAuth();

  const [reviewData, setReviewData] = useState(null);//리뷰
  const [writeComment, setWriteComment] = useState('');
  const [putHeart, setPutHerart] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [userImage, setUserImage] = useState('');
  useEffect(() => {
    async function renderReviewPage() {
      try {
        const record = await pb.collection('posts').getOne(id, {
          expand: 'user_id ,comments',
        });
        setReviewData(record);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    renderReviewPage();
  }, []);

  const handleWriteComment = (e) => {
    setWriteComment(e.target.value);
  };
  const handleDebounceWriteComment = debounce(handleWriteComment, 500);

  const handleClickPostComment = async (event) => {
    event.preventDefault();
    const data = {
      user_id: user.id,
      comment_contents: writeComment,
    };

    try {
      const record = await pb.collection('comments').create(data);

      if (record) {
        showSuccessAlert('댓글 저장에 성공하였습니다! 🚀');
        const postRecord = await pb.collection('posts').getOne(id);
        const updatedComments = [...postRecord.comments, record.id];
        const commentRegist = await pb
          .collection('posts')
          .update(id, { comments: updatedComments });

        console.log(commentRegist);
        // 데이터를 다시 가져오고 싶을 때 reviewData를 업데이트합니다.
        setReviewData(
          await pb
            .collection('posts')
            .getOne(id, { expand: 'user_id ,comments' })
        );
        setWriteComment('');
      } else {
        showErrorAlert('서버와의 통신에 문제가 발생하였습니다. ❌');
      }
    } catch (error) {
      throw new Error(error.message);
    }
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
            writeComment={writeComment}
            nickname={user.nickname}
            reviewData={reviewData}
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