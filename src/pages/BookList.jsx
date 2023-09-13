import TabButtonList from "@/components/bookList/TabButtonList"
import SubVisualBanner from "@/components/write/SubVisualBanner"



function BookList() {
  return (
    <>
      <SubVisualBanner title="도서목록"/>
      <TabButtonList/>

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
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
          </ul>
      </div>
    </>
  )
}

export default BookList