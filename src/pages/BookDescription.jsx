import PostBookInfo from '@/components/userPost/PostBookInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import PostTitle from '@/components/userPost/PostTitle';
import PostMain from '@/components/userPost/PostMain';

function BookDescription() {
  return (
    <>
      <PostBookInfo />
      <PostTitle />
      <PostMain />

      <div className="mx-[150px]">
        <div>
          <span>댓글</span>
          <span>2</span>
        </div>
        <div>
          <span>좋아요</span>
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>
      <div className="h-[300px]"></div>
      <div></div>
    </>
  );
}

export default BookDescription;
