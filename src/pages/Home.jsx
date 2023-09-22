import MainBanner from '@/components/main/MainBanner';
import BestBook from '@/components/main/BestBook';
import CategoryBook from '@/components/main/CategoryBook';
import NewBook from '@/components/main/NewBook';
import { useState } from 'react';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <MainBanner />
      <BestBook isLoading={isLoading} setIsLoading={setIsLoading}/>
      <CategoryBook isLoading={isLoading} setIsLoading={setIsLoading}/>
      <NewBook />
    </>
  );
}

export default Home;
