import { pb } from '@/api/pocketbase';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';

function ProfileView() {
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchProfileData();
  }, []);

  async function fetchProfileData() {
    try {
      const response = await pb.collection('users').getOne(user.id);
      console.log(user.id);
      console.log(response.profile);

      // 프로필 이미지 파일명 가져오기
      const profileImageFilename = response.profile;

      // 파일 URL 생성
      const profileImageUrl = pb.files.getUrl(response, profileImageFilename);

      // 상태 변수에 프로필 이미지 URL 설정
      setProfileImage(profileImageUrl);

      setNickname(response.nickname);
    } catch (error) {
      console.error('프로필 데이터를 가져오는 중 에러가 발생했습니다:', error);
    }
  }

  return (
    <div className="flex flex-row items-center gap-3">
      <img
        src={profileImage}
        alt="프로필 이미지"
        className="w-[25px] h-[25px] rounded-full"
      />
      <span className="text-base">{nickname}</span>
    </div>
  );
}

export default ProfileView;
