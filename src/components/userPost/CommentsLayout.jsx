import Comments from './Comments';
import InputComment from './InputComment';
import PostOptions from './PostOptions';
import RullsOfComment from './RullsOfComment';
import PropTypes from 'prop-types';

function CommentsLayout({ onClick, onChange, handleHeart, putHeart }) {
  const comment1 = '님 근데 이 책 거품 심하다던데...  언블리버블';
  const comment2 = '이 책 읽어봤는데 진짜 좋아습니다!! 저도 강추해요!!';
  const comment3 = '진짜 책읽다 진짜 벽느낌...   완벽';

  return (
    <>
      <PostOptions onClick={handleHeart} putHeart={putHeart} />
      <RullsOfComment />
      <InputComment onClick={onClick} onChange={onChange} />
      <Comments text={comment1} />
      <Comments text={comment2} />
      <Comments text={comment3} />
      <div className="h-[300px]"></div>
    </>
  );
}

export default CommentsLayout;

CommentsLayout.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleHeart: PropTypes.func.isRequired,
  putHeart: PropTypes.boolean,
};
