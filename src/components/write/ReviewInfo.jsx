import PropTypes from 'prop-types';

function ReviewInfo({ placeholder }) {
  return (
    <div
      aria-label="리뷰제목작성"
      className="border w-[1050px] h-[60px] flex items-center py-9 px-8 border-black mb-20 m-auto"
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-[1050px] h-[60px] text-base focus:outline-none"
      />
    </div>
  );
}

export default ReviewInfo;

ReviewInfo.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
