import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBooks({ onChange, children, value }) {
  const [isUlVisible, setIsUlVisible] = useState(false);

  const handleSearchBook = (event) => {
    event.preventDefault;
  };

  const toggleUlVisibility = () => {
    setIsUlVisible(!isUlVisible);
  };

  return (
    <form action="GET" onSubmit={handleSearchBook} autoComplete="off">
      <div className="w-[1050px] m-auto flex justify-between items-center py-9 px-8 border-b border-black">
        <div
          className={`border w-[1050px] flex justify-center relative bg-slate-200 h-[75px] items-center ${
            isUlVisible ? 'rounded-[16px]' : 'rounded-[16px]'
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
              onFocus={toggleUlVisibility}
              onBlur={toggleUlVisibility}
              className="w-[900px] h-[50px] text-xl bg-slate-200 focus:outline-none"
            ></input>
            <ul className="w-[986px] h-auto borderflex flex-col absolute bg-slate-200 left-[-1px] rounded-b-2xl px-10">
              <li className="w-[900px] h-[1px] bg-horizontal my-2"></li>
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
