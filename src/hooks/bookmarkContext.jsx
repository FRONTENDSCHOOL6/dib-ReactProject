// BookmarkContext.js
import React, { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';

// Context 생성
const BookmarkContext = createContext();

// Context를 사용하기 위한 커스텀 훅 생성
const useBookmark = () => useContext(BookmarkContext);

// Context Provider 컴포넌트 생성
export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]); // 북마크 목록

  // 북마크 추가 함수
  function addBookmark(item) {
    setBookmarks([...bookmarks, item]);
  }

  // 북마크 제거 함수
  function removeBookmark(itemId) {
    const updatedBookmarks = bookmarks.filter((item) => item.id !== itemId);
    setBookmarks(updatedBookmarks);
  }

  // 컨텍스트 값 설정
  const contextValue = {
    bookmarks,
    addBookmark,
    removeBookmark,
  };

  return (
    <BookmarkContext.Provider value={contextValue}>
      {children}
    </BookmarkContext.Provider>
  );
}

BookmarkProvider.propTypes = {
  children: propTypes.node,
};
