import SearchBooks from '@/components/write/SearchBooks';
import BookInfo from '@/layout/BookInfo';

function WirtePage() {
  return (
    <div className="w-screen flex items-center flex-col">
      <div className="bg-subVisual w-screen  h-[340px] flex justify-center items-center mb-16">
        <h1 className="text-[70px] text-white">게시글 작성</h1>
      </div>

      <SearchBooks />
      <div className="w-[1235px]">
        <BookInfo />
      </div>

      <div className="h-[200px]"></div>
    </div>
  );
}

export default WirtePage;
