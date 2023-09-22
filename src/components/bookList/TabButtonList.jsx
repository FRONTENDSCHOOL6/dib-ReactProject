import TabButton from "../common/TabButton"
import PropTypes from 'prop-types';

function TabButtonList({cssClick,htmlClick,allClick,reactClick,javascriptClick,selected}) {
  

  return (
    <div className="w-[1920px] m-auto">
      <ul aria-label="tablist" className="flex gap-12 m-auto w-[942px]">
        <li>
          <TabButton 
            category="전체"
            onClick={allClick}
            bgColor={selected === 'all' ? 'bg-primary' : 'bg-transparent'}
            textColor={selected === 'all' ? 'text-white' : 'text-infoCategory'}
            borderColor={selected === 'all' ? 'border-transparent' : 'border-infoCategory'}
          /> 
        </li>
        <li>
          <TabButton 
              category="HTML"
              onClick={htmlClick}
              bgColor={selected === 'HTML' ? 'bg-primary' : 'bg-transparent'}
              textColor={selected === 'HTML' ? 'text-white' : 'text-infoCategory'}
              borderColor={selected === 'HTML' ? 'border-transparent' : 'border-infoCategory'}
            />
        </li>
        <li>
          <TabButton 
              category="CSS"
              onClick={cssClick}
              bgColor={selected === 'CSS' ? 'bg-primary' : 'bg-transparent'}
              textColor={selected === 'CSS' ? 'text-white' : 'text-infoCategory'}
              borderColor={selected === 'CSS' ? 'border-transparent' : 'border-infoCategory'}
            />
        </li>
        <li>
          <TabButton 
              category="Javascript"
              onClick={javascriptClick}
              bgColor={selected === 'JavaScript' ? 'bg-primary' : 'bg-transparent'}
              textColor={selected === 'JavaScript' ? 'text-white' : 'text-infoCategory'}
              borderColor={selected === 'JavaScript' ? 'border-transparent' : 'border-infoCategory'}
            />
        </li>
        <li>
          <TabButton 
              category="React"
              onClick={reactClick}
              bgColor={selected === 'React' ? 'bg-primary' : 'bg-transparent'}
              textColor={selected === 'React' ? 'text-white' : 'text-infoCategory'}
              borderColor={selected === 'React' ? 'border-transparent' : 'border-infoCategory'}
            />
        </li>
      </ul>
    </div>
  )
}

export default TabButtonList

TabButtonList.propTypes = {
  reactClick: PropTypes.func.isRequired,
  javascriptClick: PropTypes.func.isRequired,
  cssClick: PropTypes.func.isRequired,
  htmlClick: PropTypes.func.isRequired,
  allClick: PropTypes.func.isRequired,
  selected: PropTypes.string,
};