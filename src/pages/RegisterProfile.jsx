import ImageUpload from '@/components/profile/ImageUpload';
import NicknameInput from '@/components/profile/NicknameInput';
import ProfileTitle from '@/components/profile/ProfileTitle';
import RegistrationButton from '@/components/profile/RegistrationButton';

function RegisterProfile() {
  return (
    <>
      <ProfileTitle />
      <ImageUpload />
      <NicknameInput />
      <RegistrationButton />
    </>
  );
}

export default RegisterProfile;
