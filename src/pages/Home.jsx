import MainBanner from '@/components/main/MainBanner';
import BestBook from '@/components/main/BestBook';
import CategoryBook from '@/components/main/CategoryBook';
import NewBook from '@/components/main/NewBook';
import Spinner from '@/components/bookList/Spinner';
import { usePbData } from '@/contexts/PbDataContext';

function Home() {
  const {  isLoading } = usePbData();

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
