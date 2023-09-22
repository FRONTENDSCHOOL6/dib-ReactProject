import PostBookInfo from '@/components/userPost/PostBookInfo';
import PostTitle from '@/components/userPost/PostTitle';
import PostMain from '@/components/userPost/PostMain';
import CommentsLayout from '@/components/userPost/CommentsLayout';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { pb } from '@/api/pocketbase';

function BookDescription() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // const sliceDate = post.created.slice(0,-14);
  
  useEffect(() => {
    async function fetchPost() {
      setIsLoading(true);
      try {
        const record = await pb.collection('posts').getOne(id,{
          expand: 'user_id',
        });
        // const url = URL.createObjectURL(post.expand.user_id[0].profile)
        // console.log(url);
        console.log(record);
        setPost(record);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    
    fetchPost();
  }, [id]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <>
      <PostBookInfo 
        src={post.book_image_link} 
        bookTitle={post.book_title} 
        author={post.author} 
        publisher={post.publisher} 
      />
      <PostTitle 
        title={post.post_title} 
        userProfile={post.expand.user_id[0].nickname} 
        nickName={post.expand.user_id[0].nickname} 
        date={post.created}
      />
      <PostMain content={post.post_contents} />
      <CommentsLayout 
      // comments={post.comments} 
      />
    </>
  );
}

export default BookDescription;
