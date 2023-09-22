import BookCardImage from './BookCardImage';
import ColBookCardInfo from './ColBookCardInfo';
import PropTypes from 'prop-types';

function ColBookCard({
  postTitle,
  bookTitle,
  nickName,
  imgSrc,
  imgAlt,
  onClick,
  postId,
  isLender,
  bookID,
}) {
  return (
    <div className="shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)]">
      <BookCardImage
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        onClick={onClick}
        bookID={bookID}
      />

      <ColBookCardInfo
        bookID={bookID}
        nickName={nickName}
        postTitle={postTitle}
        bookTitle={bookTitle}
        onClick={onClick}
        isLender={isLender}
        postId={postId}
      />
    </div>
  );
}

ColBookCard.propTypes = {
  postTitle: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isLender: PropTypes.bool,
  bookID: PropTypes.string,
  postId: PropTypes.string,
};

export default ColBookCard;
