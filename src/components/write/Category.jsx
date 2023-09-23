import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Category({ onCategorySelect }) {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['HTML', 'CSS', 'JavaScript', 'React'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsClicked(false);
    onCategorySelect(category);
  };

  return (
    <div className="flex flex-col items-center self-end  mb-[140px] relative">
      <div
        className={`${
          isClicked ? 'rounded-t-[10px]' : 'rounded-[50px]'
        } bg-slate-200  w-[220px] h-[70px] flex self-end px-11 py-5`}
      >
        <button
          className="text-dibCategory text-lg font-semibold flex justify-between items-center w-[260px] "
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          <p>{selectedCategory || '카테고리'}</p>
          <FontAwesomeIcon icon={faAngleDown} className="text-dibCategory" />
        </button>
      </div>
      <ul
        className={`${
          isClicked ? 'block' : 'hidden'
        } absolute block w-[220px] bg-slate-200  h-auto rounded-b-[15px] bottom-[-150px] py-5 px-8`}
      >
        {categories.map((category, index) => (
          <li className="hover:bg-slate-300 py-1" key={index}>
            <button
              type="button"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;

Category.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};
