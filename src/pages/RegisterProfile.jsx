import ImageUpload from '@/components/profile/ImageUpload';
import NicknameInput from '@/components/profile/NicknameInput';
import ProfileTitle from '@/components/profile/ProfileTitle';
import RegistrationButton from '@/components/profile/RegistrationButton';

function RegisterProfile() {
  return (
    <div className="flex flex-col items-center">
      <ProfileTitle />
      <ImageUpload />
      <NicknameInput />
      <RegistrationButton />
    </div>
  );
}

export default RegisterProfile;
