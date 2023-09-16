import { pb } from '@/api/pocketbase';
import { useState, useEffect } from 'react';

function Heart() {
  const [likes, setLikes] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    pb.autoCancellation(false);
    async function getLike() {
      try {
        const readRecordList = await pb.collection('posts').getFullList();
        setData(readRecordList);
      } catch (error) {
        throw new Error('error');
      }
    }
    getLike();
  }, []);

  const handleLikeClick = (id) => () => {
    setLikes({
      ...likes,
      [id]: !likes[id],
    });
    console.log(likes[id] ? '좋아요 취소' : '좋아요 버튼이 클릭되었습니다.');
  };

  console.log(data);

  if (data) {
    return (
      <>
        {data.map(({ id, like_count }) => (
          <form key={id}>
            <input
              type="checkbox"
              onClick={handleLikeClick(id)}
              aria-pressed={likes[id]}
              aria-label={likes[id] ? '' : '좋아요 취소'}
              id={`heartButton-${id}`}
              hidden
            />
            <label htmlFor={`heartButton-${id}`}>
              {likes[id] ? (
                <img src="/heart.png" alt="" />
              ) : (
                <img src="/emptyheart.png" alt="" />
              )}
            </label>
            <span>{like_count}</span>
          </form>
        ))}
      </>
    );
  } else {
    throw new Error('error');
  }
}

export default Heart;