import TabButton from "../common/TabButton"

function TabButtonList() {
  return (
    <div className="w-screen">
      <ul aria-label="tablist" className="flex gap-12 m-auto w-[1565px]">
        <li>
          <TabButton category="전체" bgColor="bg-primary" textColor="text-white" borderColor="border-transparent"/> 
        </li>
        <li>
          <TabButton category="HTML"/>
        </li>
        <li>
          <TabButton category="CSS"/>
        </li>
        <li>
          <TabButton category="Javascript"/>
        </li>
        <li>
          <TabButton category="React"/>
        </li>
      </ul>
    </div>
  )
}

export default TabButtonList