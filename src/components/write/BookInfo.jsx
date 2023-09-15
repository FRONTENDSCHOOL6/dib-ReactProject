import BookDescription from '@/components/write/BookDescription';
import BookImage from '@/components/write/BookImage';
import Category from '@/components/write/Category';

function BookInfo() {
  return (
    <div className="w-[1050px]">
      <div className="flex mt-24 mb-20 justify-between items-center">
        <BookImage />
        <div className="flex flex-col justify-between flex-grow">
          <Category />
          <ul className="w-[418px] h-[300px] flex flex-col">
            <BookDescription title={'도서제목'} />
            <BookDescription title={'저자'} />
            <BookDescription title={'출판사'} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
