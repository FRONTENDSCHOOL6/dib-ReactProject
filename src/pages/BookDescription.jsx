import PostBookInfo from '@/components/userPost/PostBookInfo';
import PostTitle from '@/components/userPost/PostTitle';
import PostMain from '@/components/userPost/PostMain';
import CommentsLayout from '@/components/userPost/CommentsLayout';

function BookDescription() {
  return (
    <>
      <PostBookInfo />
      <PostTitle />
      <PostMain />
      <CommentsLayout />
    </>
  );
}

export default BookDescription;
