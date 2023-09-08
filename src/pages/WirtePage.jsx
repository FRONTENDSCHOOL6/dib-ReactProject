// import { useEffect } from "react"

function WirtePage() {
  // useEffect(() =>{
  //     console.log('a')
  // },[])
  const handleSearchBook = (event) => {
    event.preventDefault;
  };

  return (
    <div className="w-[1920px] h-[340px]">
      <div className="bg-subVisual h-[340px] flex justify-center items-center mb-16">
        <h1 className="text-[70px] text-white">게시글 작성</h1>
      </div>

      <form method="GET" onSubmit={handleSearchBook}>
        <div className="bg-slate-200 w-[1235px] h-[100px]">
          <label htmlFor="searchBook" aria-label="도서 검색">
            <input
              type="search"
              id="searchBook"
              name="search"
              className="bg-red-300"
            ></input>
          </label>
        </div>
      </form>
    </div>
  );
}

export default WirtePage;
