import ReviewBtn from '@/components/write/ReviewBtn';
import ReviewMainText from '@/components/write/ReviewMainText';
import SearchBooks from '@/components/write/SearchBooks';
import ReviewInfo from '@/components/write/reviewInfo';
import BookInfo from '@/components/write/BookInfo';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import toast from 'react-hot-toast';
// import { createReview, readReviews } from "@/api/pocketbase";

function WritePage() {
  const [searchBook, setSearchBook] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({
    title: '책 제목',
    author: '저자',
  });

  const [inputValues, setInputValues] = useState({
    title: '',
    author: '',
  });

  useEffect(() => {
    let timer;

    // 검색어가 변경될 때 타이머를 설정하여 1초 후에 API 호출
    if (searchBook) {
      timer = setTimeout(() => {
        async function searchBookInfo() {
          const keyword = searchBook;
          const response = await fetch(
            `${
              import.meta.env.VITE_NAVER_BOOK_SEARCH_API
            }?query=${keyword}&display=4`, // 여기에서 display 값을 4로 변경
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
                'X-Naver-Client-Secret': import.meta.env
                  .VITE_NAVER_CLIENT_SECRET,
              },
            }
          );
          const data = await response.json();
          console.log(data);
          setBooks(data.items);
        }
        searchBookInfo();
      }, 1000);
    } else {
      setBooks([]);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchBook]);

  const handleClickBookRegist = (book) => {
    setSelectedBook(book);
    setInputValues({
      title: '',
      author: '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmitReview = async () => {
    const data = {
      user_id: ['02jn7lwydw4swze'],
      book_title: selectedBook.title,
      author: selectedBook.author,
      publisher: selectedBook.publisher,
      book_image_link: selectedBook.image,
      post_title: '어쩌다보니 성공했다',
      post_contents: '더미포스트',
      category: ['HTML'],
      like_count: 22,
      // comments: ['5n8naynj4lcra5a'],
    };

    const pb = new PocketBase('https://db-dib.pockethost.io');
    try {
      const record = await pb.collection('posts').create(data);
      console.log(record);
      if (record) {
        toast.success('리뷰저장에 성공하였습니다! ✅');
      } else {
        toast.error('서버와의 통신에 문제가 발생하였습니다. ❌');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      <div className="min-w-[1500px] flex items-center flex-col">
        <SubVisualBanner title={'게시글 작성'} />
        <SearchBooks onChange={(event) => setSearchBook(event.target.value)}>
          {books.map((book, index) => (
            <li
              className="my-5 hover:bg-slate-300 cursor-pointer"
              key={index}
              onClick={() => handleClickBookRegist(book)}
            >
              {book.title}
            </li>
          ))}
        </SearchBooks>

        <BookInfo
          title={selectedBook.title}
          author={selectedBook.author}
          publisher={selectedBook.publisher}
          image={selectedBook.image}
        />

        <ReviewInfo
          placeholder={'리뷰 제목'}
          name="title"
          value={inputValues.title}
          onChange={handleInputChange}
        />
        <ReviewMainText />
        <ReviewBtn onClick={handleSubmitReview} />
      </div>

      <div className="h-[200px]"></div>
    </>
  );
}

export default WritePage;
