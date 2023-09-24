import { pb } from '@/api/pocketbase';
import ImageUpload from '@/components/profile/ImageUpload';
import NicknameInput from '@/components/profile/NicknameInput';
import ProfileTitle from '@/components/profile/ProfileTitle';
import RegistrationButton from '@/components/profile/RegistrationButton';
import { showErrorAlert, showSuccessAlert } from '@/utils/showAlert';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function RegisterProfile() {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState('/emptyProfile.png');
  const [selectedFile, setSelectedFile] = useState(null);
  const [nickname, setNickname] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  console.log(location.state.userId);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const handleNicknameOnChange = (event) => {
    const newNickname = event.target.value;
    setNickname(newNickname);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (selectedFile) {
      formData.append('profileImage', selectedFile);
    } else {
      const defaultImage = await getDefaultImage();
      formData.append('profileImage', defaultImage);
    }
    formData.append('nickname', nickname);

    const regex = /^[ㄱ-힣]{1,8}$/;
    if (!regex.test(nickname)) {
      console.log('입력이 올바르지 않습니다.');
      return;
    }

    try {
      await pb.collection('users').update(location.state.userId, formData);

      setRedirectToLogin(true);
      console.log('프로필 추가 성공');
      showSuccessAlert('프로필 추가완료! 로그인을 해주세요!', '🥰');
    } catch (error) {
      console.error('프로필 추가 실패');
      showErrorAlert('프로필을 추가하지 못했어요.', '🥲');
    }
  };

  async function getDefaultImage() {
    return fetch('/defaultProfile.png')
      .then((response) => response.blob())
      .then((blob) => new File([blob], 'defaultProfile.png'));
  }

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col items-center">
      <ProfileTitle />
      <form onSubmit={handleProfileSubmit}>
        <ImageUpload
          selectedImage={selectedImage}
          handleImageUpload={handleImageUpload}
        />
        <NicknameInput
          nickname={nickname}
          handleNicknameOnChange={handleNicknameOnChange}
        />
        <RegistrationButton />
      </form>
    </div>
  );
}

export default RegisterProfile;
