
import MainBanner from "@/components/main/MainBanner";
import BestBook from "@/components/main/BestBook";
import CategoryBook from "@/components/main/CategoryBook";
import NewBook from "@/components/main/NewBook";
import FooterBar from "@/layout/FooterBar";

function Home() {
  return (
    <>
      <MainBanner />
      <BestBook />
      <CategoryBook />
      <NewBook />
      <FooterBar />
    </>
  );
}

export default Home;