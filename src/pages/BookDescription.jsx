import PostBookInfo from '@/components/userPost/PostBookInfo';
import PostTitle from '@/components/userPost/PostTitle';
import PostMain from '@/components/userPost/PostMain';
import CommentsLayout from '@/components/userPost/CommentsLayout';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import debounce from '@/utils/debounce';
import { pb } from '@/api/pocketbase';
import { showErrorAlert, showSuccessAlert } from '@/utils/showAlert';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function BookDescription() {
  //특정게시물의 아이디
  const { id } = useParams();
  const { user } = useAuth();
  const history = useNavigate();

  // 작성한 내용 상태변수
  const [reviewData, setReviewData] = useState(null);
  const [writeComment, setWriteComment] = useState('');
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    async function renderReviewPage() {
      try {
        const record = await pb.collection('posts').getOne(id, {
          expand: 'user_id ,comments',
        });
        setReviewData(record);
        return record;
      } catch (error) {
        throw new Error(error.message);
      }
    }
    renderReviewPage();
  }, []);

  const handleWriteComment = (e) => {
    setWriteComment(e.target.value);
  };

  // const handleDebounceWriteComment = debounce(handleWriteComment, 500);

  // 댓글 남긴다고 누르면 실행되는 부분
  const handleClickPostComment = async (event) => {
    event.preventDefault();

    if (!user) {
      const confirmLogin = confirm(
        '댓글 작성을 위해 로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?'
      );

      if (confirmLogin) {
        history('/login');
      }
    } else {
      // 댓글쓰고 DB에 넘어가는 정보들
      const data = {
        user_id: user.id,
        userId: user.id,
        nickName: user.nickname,
        profileImage: user.profileImage,
        comment_contents: writeComment,
      };

      // 댓글 작성 처리 코드
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
    }
  };

  const handleBookmarkToggle = async (postId) => {
    if (!user) {
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
      {reviewData && (
        <>
          <PostBookInfo
            author={reviewData.author}
            title={reviewData.book_title}
            bookImage={reviewData.book_image_link}
            publisher={reviewData.publisher}
            bookmarkClick={() => handleBookmarkToggle(reviewData.id)}
            bookmarkRander={
              user ? user.bookmark_posts.includes(reviewData.id) : false
            }
          />
          <PostTitle
            userImg={userImage}
            postTitle={reviewData.post_title}
            userName={reviewData.expand.user_id[0].nickname}
            createDate={reviewData.created}
          />
          <PostMain mainText={reviewData.post_contents} />

          <CommentsLayout
            reviewComments={
              reviewData.comments.length > 0 ? reviewData.comments.length : 0
            }
            // nickname={user.nickname}
            writeComment={writeComment}
            reviewData={reviewData}
            onClick={handleClickPostComment}
            onChange={handleWriteComment}
            heaetClick={() => handleLikeToggle(reviewData.id)}
            heartRander={
              user ? user.liked_posts.includes(reviewData.id) : false
            }
          />
        </>
      )}
    </>
  );
}

export default BookDescription;
