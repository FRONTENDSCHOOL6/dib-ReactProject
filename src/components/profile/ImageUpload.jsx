function ImageUpload() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <label htmlFor="profileImage" className="cursor-pointer">
        <img src="/emptyProfile.png" alt="프로필사진 등록하기" />
      </label>
      <input
        type="file"
        name="profile"
        id="profileImage"
        className="w-[150px] h-[150px] hidden"
      />
    </div>
  );
}
export default ImageUpload;
