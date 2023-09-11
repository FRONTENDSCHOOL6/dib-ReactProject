import BookDescription from '@/components/write/BookDescription';
import BookImage from '@/components/write/BookImage';
import Category from '@/components/write/Category';

function BookInfo() {
  return (
    <div className="flex mt-24 mb-20">
      <BookImage />
      <div className=" flex flex-col flex-grow">
        <Category />
        <ul className="mt-[158px]">
          <BookDescription title={'도서제목'} />
          <BookDescription title={'저자'} />
          <BookDescription title={'출판사'} />
        </ul>
      </div>
    </div>
  );
}

export default BookInfo;
