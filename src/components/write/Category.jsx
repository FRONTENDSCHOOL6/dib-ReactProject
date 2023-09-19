import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useBooleanStore } from '@/hooks/booleanStore';

function Category({ onClick }) {
  const { isClicked, setIsClicked } = useBooleanStore();

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
            setIsClicked();
          }}
        >
          <p>카테고리</p>
          <FontAwesomeIcon icon={faAngleDown} className="text-dibCategory" />
        </button>
      </div>
      <ul
        className={`${
          isClicked ? 'block' : 'hidden'
        } absolute block w-[220px] bg-slate-200  h-auto rounded-b-[15px] bottom-[-150px] py-5 px-8`}
      >
        <li className="hover:bg-slate-300 py-1">
          <button type="button" onClick={onClick}>
            HTML
          </button>
        </li>
        <li className="hover:bg-slate-300 py-1">
          <button type="button" onClick={onClick}>
            CSS
          </button>
        </li>
        <li className="hover:bg-slate-300 py-1">
          <button type="button" onClick={onClick}>
            JavaScript
          </button>
        </li>
        <li className="hover:bg-slate-300 py-1">
          <button type="button" onClick={onClick}>
            React
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Category;

Category.propTypes = {
  onClick: PropTypes.func.isRequired,
};
