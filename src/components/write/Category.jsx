import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Category() {
  return (
    <div className="border-2 border-dibCategory rounded-[50px] w-[284px] h-[71px] flex self-end px-11 py-5">
      {/* <p className="text-dibCategory text-3xl">카테고리</p> */}
      <button className="text-dibCategory text-3xl flex justify-between items-center w-[260px]">
        <p>카테고리</p>
        <FontAwesomeIcon icon={faAngleDown} className="text-dibCategory" />
      </button>
    </div>
  );
}

export default Category;
