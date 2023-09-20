import BookCardImage from './BookCardImage';
import ColBookCardInfo from './ColBookCardInfo';
import PropTypes from 'prop-types';

function ColBookCard({imgSrc,imgAlt,nickName,postTitle,bookTitle}) {
  return (
    <div className="shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)]">
      <BookCardImage imgSrc={imgSrc} imgAlt={imgAlt}/>
      <ColBookCardInfo
        nickName={nickName}
        postTitle={postTitle}
        bookTitle={bookTitle}
      />
    </div>
  );
}

export default ColBookCard;

ColBookCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
}