import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

function PostOptions({ heaetClick, heartRander }) {
  const [isClicked, setIsClicked] = useState(heartRander);

  return (
    <div className="m-auto mt-20 flex justify-between w-[1200px] h-[25px] text-base">
      <div className="flex items-center">
        <button>
          <span className="mr-2">댓글</span>
          <span>2</span>
        </button>

        <div className="w-[1px] h-[13px] bg-slate-400 mx-3"></div>

        <div>
          <button
            onClick={() => {
              setIsClicked((state) => !state);
              heaetClick?.();
            }}
            className="mr-2"
          >
            <span className="mr-2">좋아요</span>
            <span>
              <FontAwesomeIcon
                icon={isClicked ? solidHeart : regularHeart}
                className="text-dibHeart"
              />
            </span>
          </button>
          <span>30</span>
        </div>
      </div>
    </div>
  );
}

export default PostOptions;

PostOptions.propTypes = {
  heaetClick: PropTypes.func,

  heartRander: PropTypes.bool,
};
