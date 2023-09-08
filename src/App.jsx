import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import router from './routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
return (
  <>
    <RouterProvider router={router}>
      <Layout />
     </RouterProvider>
    <Toaster />
  </>
);
}

export default App;