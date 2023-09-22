import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { Toaster } from 'react-hot-toast';
import router from './routes/routes';
import AuthProvider from './contexts/AuthContext';
import BookmarkProvider from './contexts/BookmarkContext';
import PbDataProvider from './contexts/PbDataContext';

function App() {
  return (
    <AuthProvider>
      <PbDataProvider>
        <BookmarkProvider>
          <RouterProvider router={router}>
            <Layout />
          </RouterProvider>
        </BookmarkProvider>
      </PbDataProvider>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
