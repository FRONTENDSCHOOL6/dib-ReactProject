
import ScrollButton from '../common/ScrollButton';
function NewBook() {
return (
    <>
    <section className="text-center relative">
    <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px] m-5">
    신규 도서</h2>
    <strong className="text-dibBlack text-[16px] not-italic font-normal">
    새롭게 소개하는 도서를 여기서 만나보세요!</strong>
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
    <ScrollButton className="absolute top-10 right-4"/>
    </section>
    </>
    )
}

export default NewBook
