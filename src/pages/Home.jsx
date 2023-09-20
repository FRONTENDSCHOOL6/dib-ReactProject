import MainBanner from '@/components/main/MainBanner';
import BestBook from '@/components/main/BestBook';
import CategoryBook from '@/components/main/CategoryBook';
import NewBook from '@/components/main/NewBook';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
      ></motion.h1>
      <MainBanner />
      <BestBook />
      <CategoryBook />
      <NewBook />
    </>
  );
}

export default Home;
