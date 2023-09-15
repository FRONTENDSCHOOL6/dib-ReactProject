import BookCardImage from './BookCardImage';
import ColBookCardInfo from './ColBookCardInfo';

function ColBookCard() {
  return (
    <div className="shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)]">
      <BookCardImage />
      <ColBookCardInfo
        postTitle={'코드를 깔끔하게 쓰고 싶다면?'}
        bookTitle={'Clean Code(클린코드)'}
      />
    </div>
  );
}

export default ColBookCard;
