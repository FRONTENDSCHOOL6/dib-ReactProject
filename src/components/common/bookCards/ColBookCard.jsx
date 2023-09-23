import BookCardImage from './BookCardImage';
import ColBookCardInfo from './ColBookCardInfo';
import PropTypes from 'prop-types';

function ColBookCard({
  postTitle,
  bookTitle,
  nickName,
  imgSrc,
  imgAlt,
  heaetClick,
  postId,
  bookmarkClick,
  heartRander,
  bookID,
  bookmarkRander,
}) {
  return (
    <div className="shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)]">
      <BookCardImage
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        bookmarkClick={bookmarkClick}
        bookID={bookID}
        bookmarkRander={bookmarkRander}
      />

      <ColBookCardInfo
        bookID={bookID}
        nickName={nickName}
        postTitle={postTitle}
        bookTitle={bookTitle}
        heaetClick={heaetClick}
        heartRander={heartRander}
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
  heaetClick: PropTypes.func,
  bookmarkClick: PropTypes.func,
  bookmarkRander: PropTypes.bool,
  heartRander: PropTypes.bool,
  bookID: PropTypes.string,
  postId: PropTypes.string,
};

export default ColBookCard;