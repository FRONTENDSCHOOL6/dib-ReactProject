// BookmarkContext.js
import { createContext, useState } from 'react';
import propTypes from 'prop-types';
import { useContext } from 'react';

const BookmarkContext = createContext();

function BookmarkProvider({ children }) {
  const [buttonStates, setButtonStates] = useState([false, false, false]);

  const addButtonState = () => {
    setButtonStates((prevStates) => [...prevStates, false]);
  };

  const toggleButtonState = (index) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <BookmarkContext.Provider
      value={{ buttonStates, addButtonState, toggleButtonState }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

BookmarkProvider.propTypes = {
  children: propTypes.node,
};

export default BookmarkProvider;

export function useBookmark() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmark must be used within a BookmarkProvider');
  }
  return context;
}
