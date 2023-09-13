import PostList from '@/components/postList/PostList';
import PostListTitle from '@/components/postList/PostListTitle';
import PostWriteButton from '@/components/postList/PostWriteButton';

function PostListPage() {
  return (
    <div>
      <PostListTitle />
      <PostList />
      <PostWriteButton />
    </div>
  );
}

export default PostListPage;
