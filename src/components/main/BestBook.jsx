
function BestBook() {
return (
    <>
    <section className="text-center w-[1920px]">
    <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px] m-5">
    베스트 도서</h2>
    <strong className="text-dibBlack text-[16px] not-italic font-normal">
    dib에서 가장 인기있는 책을 소개합니다!!</strong>
    <div className="w-[1660px] m-auto">
            <ul 
            id="tab-panel-1"
            //현재본문과 연결된 버튼이 어떤버튼인지 명시
            aria-labelledby="tab-1"
            className="flex flex-wrap gap-10 justify-start mt-20 mb-20">
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            </ul>
    </div>
    </section>
    </>
    );
}
export default BestBook
