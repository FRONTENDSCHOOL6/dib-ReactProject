import PostList from '@/components/postList/PostList';
import PostListTitle from '@/components/postList/PostListTitle';
import PostWriteButton from '@/components/postList/PostWriteButton';

function PostListPage() {
  return (
    <div className="mb-[100px]">
      <PostListTitle />
      <PostList />
      <PostWriteButton />
    </div>
  );
}

export default PostListPage;
