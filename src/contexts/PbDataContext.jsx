import { useEffect } from 'react';
import { useState, createContext } from 'react';
import { pb } from '@/api/pocketbase';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const PbDataContext = createContext();

function PbDataProvider({ children }) {
  // const [page, setPage] = useState(1);
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    pb.autoCancellation(false);
    async function getPbData() {
      try {
        const allRecord = await pb.collection('posts').getFullList({
          sort: '-created',
          expand: 'user_id',
        });
        setBookData(allRecord);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    getPbData();
  }, []);

  const toggleLike = (postId) => {
    setBookData((prevData) => {
      return prevData.map((item) => {
        if (item.id === postId) {
          const newLikeCount = item.like_count + (item.isLiked ? -1 : 1);
          return { ...item, like_count: newLikeCount, isLiked: !item.isLiked };
        }
        return item;
      });
    });
  };

  return (
    <PbDataContext.Provider
      value={{ setBookData, bookData, isLoading, toggleLike }}
    >
      {children}
    </PbDataContext.Provider>
  );
}

export default PbDataProvider;

PbDataProvider.propTypes = {
  children: PropTypes.node,
};

export function usePbData() {
  const context = useContext(PbDataContext);
  if (!context) {
    throw new Error('usePbData must be used within a PbDataProvider');
  }
  return context;
}
