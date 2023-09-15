import ColBookCard from '../common/bookCards/ColBookCard';

function BestBook() {
  return (
    <>
      <section className="text-center w-[1920px] h-[670px]">
        <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px]">
          베스트 도서
        </h2>
        <strong className="text-dibBlack text-[28px] not-italic font-normal">
          dib에서 가장 인기있는 책을 소개합니다!!
        </strong>
        <div className='w-[1200px] mx-auto'>
        <ul className="flex justify-center gap-6 my-10">
          <li>
          <ColBookCard />
          </li>
          <li>
          <ColBookCard />
          </li>
          <li>
          <ColBookCard />
          </li>
          <li>
          <ColBookCard />
          </li>
        </ul>
        </div>
      </section>
    </>
  );
}
export default BestBook;
