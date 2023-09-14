import ReviewBtn from '@/components/write/ReviewBtn';
import ReviewMainText from '@/components/write/ReviewMainText';
import SearchBooks from '@/components/write/SearchBooks';
import ReviewInfo from '@/components/write/reviewInfo';
import BookInfo from '@/components/write/BookInfo';
import SubVisualBanner from '@/components/common/SubVisualBanner';

function WirtePage() {
  return (
    <div className="w-screen flex items-center flex-col">
      <SubVisualBanner title={'게시글 작성'} />
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
