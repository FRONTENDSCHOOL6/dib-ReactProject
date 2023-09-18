import PropTypes from 'prop-types';

function TabButton({
  category,
  borderColor = 'border-infoCategory',
  textColor = 'text-infoCategory',
  bgColor = 'bg-transparent',
}) {
  return (
    <button
      id="tab-1"
      type="button"
      //롤속성대신 아리아속성으로 쓰면 된다는거져? 아항
      aria-label="tab"
      //해당버튼이 선택됐는지
      aria-selected='true'
      //해당 본문과 연결하여 연관관계가있다는것을 명시
      aria-controls="tab-panel-1"
      className={`
        w-[150px] 
        h-11 
        rounded-full 
        border
        text-lg
        ${borderColor}
        ${textColor}
        ${bgColor}
      `}
    >
      {category}
    </button>
  )
}

export default TabButton


TabButton.propTypes = {
  category: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};