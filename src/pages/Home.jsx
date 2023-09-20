import { useState, useEffect } from 'react';
import MainBanner from '@/components/main/MainBanner';
import BestBook from '@/components/main/BestBook';
import CategoryBook from '@/components/main/CategoryBook';
import NewBook from '@/components/main/NewBook';
import Spinner from '@/components/bookList/Spinner';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <MainBanner />
          <BestBook />
          <CategoryBook />
          <NewBook />
        </>
      )}
    </>
  );
}

export default Home;
