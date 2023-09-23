import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useBooleanStore } from '@/hooks/useStore';

function SearchBooks({ onChange, children, value }) {
  const { isVisible, setIsVisible } = useBooleanStore();

  const handleSearchBook = (event) => {
    event.preventDefault;
  };

  const handleEnterkeyBlock = (event) => {
    if (event.code === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <form action="GET" onSubmit={handleSearchBook} autoComplete="off">
      <div className="w-[1050px] m-auto flex justify-between items-center py-9 px-8 border-b border-black">
        <div
          className={`border w-[1050px] flex justify-center relative bg-slate-200 h-[75px] items-center ${
            isVisible ? 'rounded-[16px]' : 'rounded-[40px]'
          }`}
        >
          <label htmlFor="searchBook" aria-label="도서 검색">
            <input
              type="search"
              id="searchBook"
              name="search"
              value={value}
              placeholder="등록하고 싶은 도서를 입력해주세요"
              onChange={onChange}
              onKeyDown={handleEnterkeyBlock}
              onClick={() => {
                setIsVisible();
              }}
              // onFocus={toggleUlVisibility}
              // onBlur={toggleUlVisibility}
              className="w-[870px] h-[50px] text-xl bg-slate-200 focus:outline-none"
            ></input>
            <ul
              className={`${
                isVisible ? 'block' : 'hidden'
              } w-[986px] h-auto borderflex flex-col absolute bg-slate-200 left-[-1px] rounded-b-2xl px-10`}
            >
              <li className="w-[850px] h-[1px] bg-horizontal my-2"></li>
              {children}
            </ul>
          </label>

          <button aria-label="검색하기">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-[35px] h-[35px]"
            />
          </button>
        </div>
      </div>
      <div></div>
    </form>
  );
}

export default SearchBooks;

SearchBooks.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  value: PropTypes.string,
};
