import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { Toaster } from 'react-hot-toast';
import router from './routes/routes';


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