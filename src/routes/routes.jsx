import Layout from '@/layout/Layout.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import Home from '@/pages/Home';
import WritePage from '@/pages/WritePage';
import BookDescription from '@/pages/BookDescription';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="writePage" element={<WritePage />} />
      <Route path="bookDescription" element={<BookDescription />} />
    </Route>
  )
);

export default router;
