import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { Toaster } from 'react-hot-toast';
import router from './routes/routes';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
