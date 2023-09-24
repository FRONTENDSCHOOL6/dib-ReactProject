import ReviewBtn from '@/components/write/ReviewBtn';
import ReviewMainText from '@/components/write/ReviewMainText';
import SearchBooks from '@/components/write/SearchBooks';
import ReviewInfo from '@/components/write/ReviewInfo';
import BookInfo from '@/components/write/BookInfo';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { useState, useEffect } from 'react';
import { pb } from '@/api/pocketbase';
import { useCategoryStore } from '@/hooks/useStore';
import { showErrorAlert, showSuccessAlert } from '@/utils/showAlert';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function WritePage() {
  const navigate = useNavigate();
  const [searchBook, setSearchBook] = useState('');
  const [books, setBooks] = useState([]);
  const [reviewMainText, setReviewMainText] = useState('');
  const [selectedBook, setSelectedBook] = useState({
    title: '책 제목',
    author: '저자',
  });
  const [reviewTitle, setReviewTitle] = useState('');
  const { category, setCategory } = useCategoryStore();

  const { user } = useAuth();

  useEffect(() => {
    let timer;

    if (searchBook) {
      timer = setTimeout(() => {
        async function searchBookInfo() {
          const keyword = searchBook;
          const response = await fetch(`${URL}?query=${keyword}&display=4`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
              'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_CLIENT_SECRET,
              'Access-Control-Allow-Origin': '*',
            },
          });
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
      setReviewTitle(event.target.value);
    }, 1000);
  };

  const handleSelectCategory = (event) => {
    const selectedCategory = event.target.textContent;
    setCategory(selectedCategory);
  };

  const handleSubmitReview = async () => {
    if (
      !selectedBook.title ||
      !selectedBook.author ||
      !selectedBook.publisher ||
      !reviewTitle ||
      !reviewMainText ||
      !category
    ) {
      showErrorAlert('모든 필드를 입력해주세요.', '🥹');
      console.log(selectedBook.title);
      return;
    }

    const data = {
      user_id: user.id,
      book_title: selectedBook.title,
      author: selectedBook.author,
      publisher: selectedBook.publisher,
      book_image_link: selectedBook.image,
      post_title: reviewTitle,
      post_contents: reviewMainText,
      category: [category],
      like_count: 0,
    };

    try {
      const record = await pb.collection('posts').create(data);
      if (record) {
        const successDataId = record.id;

        await pb.collection('users').update(user.id, {
          written_posts: [...user.written_posts, successDataId],
        });

        showSuccessAlert('리뷰저장에 성공하였습니다!', '✅');
        navigate('/postListPage');
      } else {
        showErrorAlert('서버와의 통신에 문제가 발생하였습니다.', '❌');
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
          onClick={handleSelectCategory}
        />

        <ReviewInfo
          placeholder={'리뷰 제목'}
          name="title"
          onChange={handleReviewTitle}
        />
        <ReviewMainText onChange={handleReviewMainText} />
        <ReviewBtn onClick={handleSubmitReview} />
      </div>
    </>
  );
}

export default WritePage;
