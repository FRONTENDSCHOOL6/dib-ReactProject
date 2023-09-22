import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { Toaster } from 'react-hot-toast';
import router from './routes/routes';
import AuthProvider from './contexts/AuthContext';
import PbDataProvider from './contexts/PbDataContext';

function App() {
  return (
    <AuthProvider>
      <PbDataProvider>
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </PbDataProvider>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
