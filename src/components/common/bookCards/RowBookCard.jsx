import BookCardImage from './BookCardImage';
import RowBookCardInfo from './RowBookCardInfo';

function RowBookCard() {
  return (
    <div className="flex w-[560px] h-[284px] ">
      <BookCardImage />
      <RowBookCardInfo
        postTitle={'코드를 깔끔하게 쓰고 싶다면?'}
        bookTitle={'Clean Code(클린코드)'}
      />
    </div>
  );
}

export default RowBookCard;
