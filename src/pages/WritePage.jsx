import ReviewBtn from '@/components/write/ReviewBtn';
import ReviewMainText from '@/components/write/ReviewMainText';
import SearchBooks from '@/components/write/SearchBooks';
import ReviewInfo from '@/components/write/reviewInfo';
import BookInfo from '@/components/write/BookInfo';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { useState } from 'react';

function WirtePage() {
  const [searchBook, setSearchBook] = useState('');
  const [timer, setTimer] = useState(null);

  function handleSearchBookInput(event) {
    event.preventDefault();

    clearTimeout(timer);

    const InputTimer = setTimeout(() => {
      setSearchBook(event.target.value);
    }, 1000);

    setTimer(InputTimer);
  }

  async function handleSearchBookBtn(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        import.meta.env.NAVER_BOOK_SEARCH_API,
        {
          params: {
            query: 'deepdive',
          },
        },
        {
          headers: {
            'X-Naver-Client-Id': 'XfcAXK6L_7KqaKrub3qC',
            'X-Naver-Client-Secret': 'IzStHheIEv',
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  return (
    <div className="min-w-[1500px] flex items-center flex-col">
      <SubVisualBanner title={'게시글 작성'} />
      <SearchBooks
        onChange={handleSearchBookInput}
        onClick={handleSearchBookBtn}
      />
      <BookInfo title={searchBook} />
      <ReviewInfo placeholder={'리뷰 제목'} />
      <ReviewMainText />
      <ReviewBtn />

      <div className="h-[200px]"></div>
    </div>
  );
}

export default WirtePage;
