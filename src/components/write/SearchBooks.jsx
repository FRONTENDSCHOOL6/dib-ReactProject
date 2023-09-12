import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBooks() {
  const handleSearchBook = (event) => {
    event.preventDefault;
  };

  return (
    <form action="GET" onSubmit={handleSearchBook}>
      <div className="w-[1235px] h-[100px] flex justify-between items-center py-9 px-8 border border-black">
        <label htmlFor="searchBook" aria-label="도서 검색">
          <input
            type="search"
            id="searchBook"
            name="search"
            placeholder="등록하고 싶은 도서를 입력해주세요"
            className="w-[1050px] h-[60px]"
          ></input>
        </label>
        <button>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-[35px] h-[35px]"
          />
        </button>
      </div>
    </form>
  );
}

export default SearchBooks;