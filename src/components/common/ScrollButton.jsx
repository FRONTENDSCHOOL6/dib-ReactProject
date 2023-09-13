function ScrollButton() {
const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
return (
    <>
    <button onClick={handleScrollToTop}>
        <img
            src="/page-up.png"
            alt="페이지 최상단 가기"
            className="flex w-[50px] h-[50px]"
        />
    </button>
    </>
    );
}

export default ScrollButton;
