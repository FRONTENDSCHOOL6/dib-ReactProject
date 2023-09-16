function ScrollButton() {
const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
return (
    <>
    <button onClick={handleScrollToTop} className="absolute bottom-1 right-10 ">
        <img
            src="/page-up.png"
            alt="페이지 최상단 가기"
            className="flex w-[50px] h-[50px]"
            title="페이지 상단 이동"
        />
    </button>
    </>
    );
}

export default ScrollButton;
