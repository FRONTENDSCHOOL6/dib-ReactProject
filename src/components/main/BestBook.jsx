
import ColBookCard from '../common/bookCards/ColBookCard';
import RowBookCard from '../common/bookCards/RowBookCard';


function BestBook() {
  return (
    <>
      <section className="text-center">
        <h2 className="text-dibBlack text-[70px] not-italic font-normal leading-[normal] tracking-[-1.5px]">
          베스트 도서
        </h2>
        <strong className="text-dibBlack text-[28px] not-italic font-normal">
          dib에서 가장 인기있는 책을 소개합니다!!
        </strong>
        <div className="flex justify-center my-10">
          <ColBookCard />
          <div className="mr-20"></div>
          <RowBookCard />
        </div>
      </section>

    </>
  );
}
export default BestBook;
