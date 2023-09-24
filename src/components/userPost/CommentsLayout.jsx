import Comments from './Comments';
import InputComment from './InputComment';
import PostOptions from './PostOptions';
import RullsOfComment from './RullsOfComment';
import PropTypes from 'prop-types';

function CommentsLayout({
  onClick,
  onChange,
  heaetClick,
  reviewData,
  heartRander,
  writeComment,
}) {
  const comments = reviewData?.expand?.comments || [];

  return (
    <>
      <PostOptions heaetClick={heaetClick} heartRander={heartRander} />
      <RullsOfComment />
      <InputComment
        onClick={onClick}
        onChange={onChange}
        writeComment={writeComment}
      />

      {comments.length > 0 ? (
        [...comments]
          .reverse()
          .map((comment, index) => (
            <Comments
              key={index}
              userId={comment.userId}
              text={comment.comment_contents}
              date={comment.created.slice(0, -8)}
              nickName={comment.nickName}
              profileImage={comment.profileImage}
            />
          ))
      ) : (
        <p className="m-auto w-[1200px] text-center mt-10">
          아직 댓글이 없습니다.
        </p>
      )}
    </>
  );
}

export default CommentsLayout;

CommentsLayout.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  heaetClick: PropTypes.func.isRequired,
  putHeart: PropTypes.bool,
  reviewData: PropTypes.object,
  date: PropTypes.string,
  writeComment: PropTypes.string,
  heartRander: PropTypes.bool,
};
