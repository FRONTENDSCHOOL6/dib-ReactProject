import ProfileImage from '@/components/common/ProfileData/ProfileImage';
import Nickname from '@/components/common/ProfileData/ProfileNickname';

function ProfileView() {
  return (
    <div className="flex flex-row items-center gap-3">
      <ProfileImage />
      <Nickname />
    </div>
  );
}

export default ProfileView;
