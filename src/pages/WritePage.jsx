import ReviewBtn from '@/components/write/ReviewBtn';
import ReviewMainText from '@/components/write/ReviewMainText';
import SearchBooks from '@/components/write/SearchBooks';
import ReviewInfo from '@/components/write/reviewInfo';
import BookInfo from '@/components/write/BookInfo';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import toast from 'react-hot-toast';
import { useCategoryStore } from '@/hooks/categoryStore';

function WritePage() {
  const [searchBook, setSearchBook] = useState('');
  const [books, setBooks] = useState([]);
  const [reviewMainText, setReviewMainText] = useState('');
  const [selectedBook, setSelectedBook] = useState({
    title: '책 제목',
    author: '저자',
  });
  const [inputValues, setInputValues] = useState('');
  const { category, setCategory } = useCategoryStore();

  useEffect(() => {
    let timer;

    if (searchBook) {
      timer = setTimeout(() => {
        async function searchBookInfo() {
          const keyword = searchBook;
          const response = await fetch(
            `${
              import.meta.env.VITE_NAVER_BOOK_SEARCH_API
            }?query=${keyword}&display=4`,
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
      }, 800);
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

  const handleReviewMainText = (event) => {
    setTimeout(() => {
      setReviewMainText(event.target.value);
    }, 1000);
  };

  const handleReviewTitle = (event) => {
    setTimeout(() => {
      setInputValues(event.target.value);
    }, 1000);
  };

  const handleSelectCategory = (event) => {
    event.preventDefault();
    setCategory(event.target.textContent);
  };

  const handleSubmitReview = async () => {
    if (
      !selectedBook.title ||
      !selectedBook.author ||
      !selectedBook.publisher ||
      !inputValues ||
      !reviewMainText ||
      !category
    ) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    const data = {
      user_id: ['02jn7lwydw4swze'],
      book_title: selectedBook.title,
      author: selectedBook.author,
      publisher: selectedBook.publisher,
      book_image_link: selectedBook.image,
      post_title: inputValues,
      post_contents: reviewMainText,
      category: [category],
      like_count: 22,
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
              aria-label={book.title}
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
          onClick={(event) => {
            handleSelectCategory(event);
          }}
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
