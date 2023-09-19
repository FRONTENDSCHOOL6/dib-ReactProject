import BookCardImage from './BookCardImage';
import ColBookCardInfo from './ColBookCardInfo';
import PropTypes from 'prop-types';

function ColBookCard({ postTitle, bookTitle, nickName, imgSrc ,imgAlt }) {
  return (
    <div className="shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)]">
      <BookCardImage imgSrc={imgSrc} imgAlt={imgAlt} />
      <ColBookCardInfo
        nickName={nickName}
        postTitle={postTitle}
        bookTitle={bookTitle}
      />
    </div>
  );
}

ColBookCard.propTypes = {
  postTitle: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt:PropTypes.string.isRequired,
};

export default ColBookCard;
