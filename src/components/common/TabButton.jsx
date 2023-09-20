import PropTypes from 'prop-types';

function TabButton({
  category,
  borderColor = 'border-infoCategory',
  textColor = 'text-infoCategory',
  bgColor = 'bg-transparent',
  onClick,
}) {

  return (
    <button
      id="tab-1"
      type="button"
      aria-label="tab"
      aria-selected='true'
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
      onClick={onClick}
    >
      {category}
    </button>
  );
}

TabButton.propTypes = {
  category: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default TabButton;

