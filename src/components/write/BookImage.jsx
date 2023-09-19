import PropTypes from 'prop-types';

function BookImage({ image = '/blankImage.png' }) {
  return (
    <div className="mr-[80px]">
      <img
        src={image}
        alt="등록할 도서의 이미지"
        className="w-[400px] h-[513px]"
      />
    </div>
  );
}

export default BookImage;

BookImage.propTypes = {
  image: PropTypes.string,
};
