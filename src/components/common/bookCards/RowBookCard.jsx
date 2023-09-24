import BookCardImage from './BookCardImage';
import RowBookCardInfo from './RowBookCardInfo';
import PropTypes from 'prop-types';

function RowBookCard({
  postTitle,
  bookTitle,
  nickName,
  imgSrc,
  imgAlt,
  bookID,
  bookmarkClick,
  bookmarkRander,
  heaetClick,
  heartRander,
  userId,
  profileImage,
}) {
  return (
    <div className="flex w-[560px] h-[284px] ">
      <BookCardImage
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        bookID={bookID}
        bookmarkClick={bookmarkClick}
        bookmarkRander={bookmarkRander}
      />
      <RowBookCardInfo
        heaetClick={heaetClick}
        heartRander={heartRander}
        userId={userId}
        profileImage={profileImage}
        nickName={nickName}
        postTitle={postTitle}
        bookTitle={bookTitle}
      />
    </div>
  );
}

RowBookCard.propTypes = {
  postTitle: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  bookID: PropTypes.string.isRequired,
  heaetClick: PropTypes.func,
  bookmarkClick: PropTypes.func,
  bookmarkRander: PropTypes.bool,
  heartRander: PropTypes.bool,
  userId: PropTypes.string,
  profileImage: PropTypes.string,
};

export default RowBookCard;
