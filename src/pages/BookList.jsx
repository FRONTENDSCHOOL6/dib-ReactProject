import TabButtonList from "@/components/bookList/TabButtonList"
import ColBookCard from "@/components/common/bookCards/ColBookCard"
import SubVisualBanner from "@/components/common/SubVisualBanner"



function BookList() {
  return (
    <>
      <SubVisualBanner title="도서목록"/>
      <TabButtonList/>

      <div className="w-[1920px] m-auto">
          <ul 
            id="tab-panel-1"
            //현재본문과 연결된 버튼이 어떤버튼인지 명시
            aria-labelledby="tab-1"
            className="w-[1200px] m-auto flex flex-wrap gap-x-6 gap-y-10 justify-start mt-16 mb-20">
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
    </>
  )
}

export default BookList