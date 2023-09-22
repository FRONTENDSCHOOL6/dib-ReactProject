import { useState } from 'react';

function HeartButton() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    console.log(liked ? '좋아요 취소' : '좋아요 버튼이 클릭되었습니다.');
  };

  return (
    <>
<form >
    <input
        type="checkbox"
        onClick={handleLikeClick}
        aria-pressed={liked}
        aria-label={liked ? '' : '좋아요 취소'}
        id="heartButton1"
        hidden
    />
        <label htmlFor="heartButton1">
        {liked ? (
            <img src="/heart.png" alt="" />
            ) : (
            <img src="/emptyheart.png" alt="" />
        )}
    </label>
    </form>
    </>
  );
}

export default HeartButton;