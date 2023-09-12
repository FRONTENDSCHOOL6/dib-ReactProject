import Layout from '@/layout/Layout.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import Home from '@/pages/Home';
import WritePage from '@/pages/WirtePage';
import SignIn from '@/pages/SignIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='writePage' element={<WritePage />} />
      <Route path='signIn' element={<SignIn />} />
    </Route>,
  ),
);

export default router;