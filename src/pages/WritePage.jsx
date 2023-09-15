import ReviewBtn from '@/components/write/ReviewBtn';
import ReviewMainText from '@/components/write/ReviewMainText';
import SearchBooks from '@/components/write/SearchBooks';
import ReviewInfo from '@/components/write/reviewInfo';
import BookInfo from '@/components/write/BookInfo';
import SubVisualBanner from '@/components/common/SubVisualBanner';

function WirtePage() {
  return (
    <div className="min-w-[1500px] flex items-center flex-col">
      <div className="h-[110px]"></div>
      <SubVisualBanner title={'게시글 작성'} />
      <SearchBooks />
      <BookInfo />
      <ReviewInfo placeholder={'리뷰 제목'} />
      <ReviewMainText />
      <ReviewBtn />

      <div className="h-[200px]"></div>
    </div>
  );
}

export default WirtePage;
