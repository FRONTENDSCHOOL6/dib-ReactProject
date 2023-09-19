import BookCardImage from './BookCardImage';
import ColBookCardInfo from './ColBookCardInfo';

function ColBookCard() {
  return (
    <div className="shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)]">
      <BookCardImage />
      <ColBookCardInfo />
    </div>
  );
}

export default ColBookCard;
