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
  const [reviewMainText, setReviewMainText] = useState('');
  const [selectedBook, setSelectedBook] = useState({
    title: '책 제목',
    author: '저자',
  });
  const [inputValues, setInputValues] = useState('');

  useEffect(() => {
    let timer;

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
  };

  const handleReviewMainText = (e) => {
    setTimeout(() => {
      setReviewMainText(e.target.value);
    }, 1000);
  };

  const handleReviewTitle = (e) => {
    setTimeout(() => {
      setInputValues(e.target.value);
    }, 1000);
  };

  const handleSubmitReview = async () => {
    const data = {
      user_id: ['02jn7lwydw4swze'],
      book_title: selectedBook.title,
      author: selectedBook.author,
      publisher: selectedBook.publisher,
      book_image_link: selectedBook.image,
      post_title: inputValues,
      post_contents: reviewMainText,
      category: ['HTML'],
      like_count: 22,
      // comments: ['5n8naynj4lcra5a'],
    };

    const pb = new PocketBase('https://db-dib.pockethost.io');
    try {
      const record = await pb.collection('posts').create(data);
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
          onChange={handleReviewTitle}
        />
        <ReviewMainText onChange={handleReviewMainText} />
        <ReviewBtn onClick={handleSubmitReview} />
      </div>

      <div className="h-[200px]"></div>
    </>
  );
}

export default WritePage;
