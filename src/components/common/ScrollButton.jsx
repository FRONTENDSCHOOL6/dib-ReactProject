import { useEffect, useState } from "react";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
   }, []);


  return (
     <>
       {isVisible && 
         <button type="button" onClick={handleScrollToTop} className="fixed bottom-5 right-5 z-50">
           <img src="/page-up.png" alt="페이지 최상단 가기" className="w-[50px] h-[50px]" title="페이지 상단 이동"/>
         </button>}
     </>
  );
}

export default ScrollButton;
