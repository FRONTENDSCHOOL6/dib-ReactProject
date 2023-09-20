import { useState } from 'react';
import TabButton from '../common/TabButton';
import PropTypes from 'prop-types';

function CategoryTabButtonList({
  cssClick,
  htmlClick,
  reactClick,
  javascriptClick,
}) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="w-[1920px] m-auto">
      <ul aria-label="tablist" className="inline-flex gap-10 items-start">
        <li>
          <TabButton
            category="HTML"
            onClick={() => handleButtonClick(htmlClick)}
            bgColor={
              activeCategory === 'HTML' ? 'bg-primary' : 'bg-transparent'
            }
            textColor={
              activeCategory === 'HTML' ? 'text-white' : 'text-infoCategory'
            }
            borderColor={
              activeCategory === 'HTML'
                ? 'border-transparent'
                : 'border-infoCategory'
            }
          />
        </li>
        <li>
          <TabButton
            category="CSS"
            onClick={() => handleButtonClick(cssClick)}
            bgColor={
              activeCategory === 'CSS' ? 'bg-primary' : 'bg-transparent'}
            textColor={
              activeCategory === 'CSS' ? 'text-white' : 'text-infoCategory'
            }
            borderColor={
              activeCategory === 'CSS'
                ? 'border-transparent'
                : 'border-infoCategory'
            }
          />
        </li>
        <li>
          <TabButton
            category="Javascript"
            onClick={() => handleButtonClick(javascriptClick)}
            bgColor={
              activeCategory === javascriptClick ? 'bg-primary' : 'bg-transparent'
            }
            textColor={
              activeCategory === javascriptClick
                ? 'text-white'
                : 'text-infoCategory'
            }
            borderColor={
              activeCategory === javascriptClick
                ? 'border-transparent'
                : 'border-infoCategory'
            }
          />
        </li>
        <li>
          <TabButton
            category="React"
            onClick={() => handleButtonClick(reactClick)}
            bgColor={
              activeCategory === 'React' ? 'bg-primary' : 'bg-transparent'
            }
            textColor={
              activeCategory === 'React' ? 'text-white' : 'text-infoCategory'
            }
            borderColor={
              activeCategory === 'React'
                ? 'border-transparent'
                : 'border-infoCategory'
            }
          />
        </li>
      </ul>
    </div>
  );
}

export default CategoryTabButtonList;

CategoryTabButtonList.propTypes = {
  reactClick: PropTypes.func.isRequired,
  javascriptClick: PropTypes.func.isRequired,
  cssClick: PropTypes.func.isRequired,
  htmlClick: PropTypes.func.isRequired,
};
