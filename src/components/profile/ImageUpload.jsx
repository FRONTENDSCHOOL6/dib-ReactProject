function ImageUpload(selectedImage) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <label htmlFor="profileImage" className="sr-only">
        프로필사진 등록하기
      </label>
      <input
        type="file"
        name="profile"
        id="profileImage"
        className="w-[150px] h-[150px] bg-blue-200"
      />
    </div>
  );
}
export default ImageUpload;
