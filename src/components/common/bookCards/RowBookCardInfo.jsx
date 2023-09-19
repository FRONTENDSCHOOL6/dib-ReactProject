import PropTypes from 'prop-types';
import { pb } from '@/api/pocketbase';
import { useState, useEffect } from 'react';

function RowBookCardInfo({ postId, bookId }) {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    console.log(liked ? '좋아요 취소' : '좋아요 버튼이 클릭되었습니다.');
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await pb.collection('posts').getFullList();
        
        setData(postData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (data.length > 0) {
    const filteredData = data.filter(
      (item) => item.post_id === postId && item.book_id === bookId
    );

    if (filteredData.length > 0) {
      const item = filteredData[0];

      return (
        <div className="bg-white py-5 px-7 w-[280px] h-[284px] flex flex-col justify-center border-l-8 border-l-[#DCDCDC] border-dashed">
          <h3 className="text-xl text-left font-semibold mb-[40px] truncate">
            {item.post_title}
          </h3>
          <h4 className="text-base text-left mb-[10px] truncate">
            {item.book_title}
          </h4>

          <div className="flex items-center justify-between w-[217px]">
            <div className="w-[200px] h-[28px] flex items-center mr-10">
              <div className="w-7 h-7 rounded-full bg-slate-300 mr-[5px]" />
              {/* 사용자 아이디 출력 */}
              <span className="text-sm">{item.user_id}</span>
            </div>
            <div>
              <form>
                <input
                  type="checkbox"
                  onClick={() => handleLikeClick(item)}
                  aria-pressed={liked}
                  aria-label={liked ? '' : '좋아요 취소'}
                  id={`heartButton-${postId}-${bookId}`}
                  hidden
                />
                <label htmlFor={`heartButton-${postId}-${bookId}`}>
                  {liked ? (
                    <img src="/heart.png" alt="" />
                  ) : (
                    <img src="/emptyheart.png" alt="" />
                  )}
                </label>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

  return null;
}

RowBookCardInfo.propTypes = {
  postId: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default RowBookCardInfo;
