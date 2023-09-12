import VisualBanner from '@/components/SubVisualBanner';
import ReviewBtn from '@/components/write/ReviewBtn';
import ReviewMainText from '@/components/write/ReviewMainText';
import SearchBooks from '@/components/write/SearchBooks';
import ReviewInfo from '@/components/write/reviewInfo';
import BookInfo from '@/layout/BookInfo';

function WirtePage() {
  return (
    <div className="w-screen flex items-center flex-col">
      <VisualBanner title={'게시글 목록'} />
      <SearchBooks />
      <div className="w-[1235px]">
        <BookInfo />
      </div>

      <ReviewInfo placeholder={'리뷰 제목'} />
      <ReviewMainText />
      <ReviewBtn />

      <div className="h-[200px]"></div>
    </div>
  );
}

export default WirtePage;
