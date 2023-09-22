import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

function PostOptions({ onClick, putHeart }) {
  return (
    <div className="m-auto mt-20 flex justify-between w-[1200px] h-[25px] text-base">
      <div className="flex items-center">
        <button>
          <span className="mr-2">댓글</span>
          <span>2</span>
        </button>

        <div className="w-[1px] h-[13px] bg-slate-400 mx-3"></div>

        <div>
          <button onClick={onClick} className="mr-2">
            <span className="mr-2">좋아요</span>
            <span>
              <FontAwesomeIcon
                icon={putHeart ? solidHeart : regularHeart}
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
  onClick: PropTypes.func,
  putHeart: PropTypes.boolean,
};
