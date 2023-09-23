import Comments from './Comments';
import InputComment from './InputComment';
import PostOptions from './PostOptions';
import RullsOfComment from './RullsOfComment';
import PropTypes from 'prop-types';

function CommentsLayout({ onClick, onChange, handleHeart, putHeart, reviewData }) {

  const comments = reviewData?.expand?.comments || [];
  console.log(comments);

  return (
    <>
      <PostOptions onClick={handleHeart} putHeart={putHeart} />
      <RullsOfComment />
      <InputComment onClick={onClick} onChange={onChange} />

      {comments.length > 0 ? (
        comments.map((comment,index)=>(
          <Comments key={index} text={comment.comment_contents} date={comment.created} nickName={comment.user_id}
          />
        ))
      ) : (
        <p className='m-auto w-[1200px] text-center mt-10'>아직 댓글이 없습니다.</p>
      )}
    </>
  );
}

export default CommentsLayout;

CommentsLayout.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleHeart: PropTypes.func.isRequired,
  putHeart: PropTypes.bool,
  reviewData: PropTypes.object,
  date: PropTypes.string,
};
