import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function PostOptions() {
  return (
    <div className="m-auto mt-20 flex justify-between w-[1525px] h-[25px]">
      <div className="flex items-center">
        <button>
          <span className="mr-2">댓글</span>
          <span>2</span>
        </button>

        <div className="w-[1px] h-[13px] bg-slate-400 mx-3"></div>

        <div>
          <button className="mr-2">
            <span className="mr-2">좋아요</span>
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <span>30</span>
        </div>
      </div>

      <div className="flex items-center">
        <button>수정</button>
        <div className="w-[1px] h-[13px] bg-slate-400 mx-3"></div>
        <button>삭제</button>
      </div>
    </div>
  );
}

export default PostOptions;
