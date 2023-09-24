import PropTypes from 'prop-types';

function ImageUpload({ selectedImage, handleImageUpload }) {
  return (
    <div
      title="프로필이미지 등록하기"
      className="flex items-center justify-center space-x-4"
    >
      <label
        htmlFor="profileImage"
        className="w-[150px] h-[150px] rounded-full object-cover cursor-pointer"
      >
        <img
          src={selectedImage}
          alt="프로필사진 등록하기"
          className="w-[150px] h-[150px] rounded-full object-cover"
        />
      </label>
      <input
        type="file"
        name="profile"
        id="profileImage"
        className="w-[150px] h-[150px] hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
}

export default ImageUpload;

ImageUpload.propTypes = {
  selectedImage: PropTypes.string,
  handleImageUpload: PropTypes.func,
};
