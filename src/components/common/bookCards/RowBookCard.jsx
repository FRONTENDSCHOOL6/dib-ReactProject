import BookCardImage from './BookCardImage';
import RowBookCardInfo from './RowBookCardInfo';

function RowBookCard() {
  return (
    <div className="flex w-[560px] h-[284px] ">
      <BookCardImage />
      <RowBookCardInfo/>
    </div>
  );
}

export default RowBookCard;
