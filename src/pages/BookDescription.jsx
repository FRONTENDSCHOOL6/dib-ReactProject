import PostBookInfo from '@/components/userPost/PostBookInfo';
import PostTitle from '@/components/userPost/PostTitle';
import PostMain from '@/components/userPost/PostMain';
import CommentsLayout from '@/components/userPost/CommentsLayout';
import PocketBase from 'pocketbase';
import toast from 'react-hot-toast';
import { useState } from 'react';

function BookDescription() {
  const [writeCommnet, setWriteComment] = useState('');

  const handleWriteComment = (event) => {
    setWriteComment(event.target.value);
  };

  const handleClickPostComment = async (event) => {
    event.preventDefault();
    const data = {
      user_id: ['1u8j85zmyjckzwl'],
      comment_contents: writeCommnet,
    };

    const pb = new PocketBase('https://db-dib.pockethost.io');
    try {
      const record = await pb.collection('comments').create(data);
      if (record) {
        toast.success('댓글 저장에 성공하였습니다! 🚀');
      } else {
        toast.error('서버와의 통신에 문제가 발생하였습니다. ❌');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      <PostBookInfo />
      <PostTitle />
      <PostMain />
      <CommentsLayout
        onClick={(event) => {
          handleClickPostComment(event);
        }}
        onChange={(event) => {
          handleWriteComment(event);
        }}
      />
    </>
  );
}

export default BookDescription;
