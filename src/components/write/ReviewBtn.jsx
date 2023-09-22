import PropTypes from 'prop-types';

function ReviewBtn({ onClick }) {
  return (
    <div className="w-[1050px] m-auto flex justify-center">
      <button
        className="w-[300px] h-[53px] bg-primary text-white text-lg rounded-[100px]"
        onClick={onClick}
      >
        리뷰 등록
      </button>
    </div>
  );
}

export default ReviewBtn;

ReviewBtn.propTypes = {
  onClick: PropTypes.func,
};
