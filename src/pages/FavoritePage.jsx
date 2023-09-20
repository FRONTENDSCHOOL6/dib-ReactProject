import { useState } from 'react';
import SubVisualBanner from '@/components/common/SubVisualBanner';

function FavoritePage() {
  const [bookmarks, setBookmarks] = useState([]);

  // 북마크 추가 함수
  const addBookmark = (bookmark) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
  };

  // 북마크 제거 함수
  const removeBookmark = (bookmark) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((item) => item.id !== bookmark.id)
    );
  };

  return (
    <>
      <SubVisualBanner title={'즐겨 찾기'} />
      <div className="flex justify-center items-center h-64">
        {bookmarks.length === 0 ? (
          <p className="text-dibGray text-center font-Pretendard text-[20px] font-normal leading-normal tracking-tighter">
            즐겨찾는 글이 없습니다! <br/> 책갈피를 누르고 즐겨찾기에 넣어보세요!
          </p>
        ) : (
          /* 북마크 목록을 렌더링하는 컴포넌트나 UI를 추가하세요 */
          <p>북마크 목록이 있을 때의 UI</p>
        )}
      </div>
    </>
  );
}

export default FavoritePage;
