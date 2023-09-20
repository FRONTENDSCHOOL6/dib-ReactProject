// PocketBase SDK 활용편
import { useState } from 'react';
import pb from './pocketbase';

// SDK 처리 함수를 포함하는 사용자 정의 훅 작성
export function useProducts() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');

  async function getProductList() {
    try {
      setStatus('loading');
      const productItems = await pb.collection('products').getFullList();
      setData(productItems);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return {
    data,
    status,
    getProductList,
  };
}
