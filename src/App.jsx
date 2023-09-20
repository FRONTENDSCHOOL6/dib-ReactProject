import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { Toaster } from 'react-hot-toast';
import router from './routes/routes';
import { BookmarkProvider } from '@/hooks/bookmarkContext';

function App() {
  return (
    <>
      <BookmarkProvider>
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </BookmarkProvider>
      <Toaster />
    </>
  );
}

export default App;
