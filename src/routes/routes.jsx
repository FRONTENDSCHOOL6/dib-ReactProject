import Layout from '@/layout/Layout.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import Home from '@/pages/Home';
import WritePage from '@/pages/WritePage';
import Login from '@/pages/Login';
import BookList from '@/pages/BookList';
import BookDescription from '@/pages/BookDescription';
import RegisterProfile from '@/pages/RegisterProfile';
import PostListPage from '@/pages/PostListPage';
import FavoritePage from '@/pages/FavoritePage';
import Join from '@/pages/Join';
import PrivateRoute from '@/contexts/PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<PrivateRoute />}>
        <Route path="postListPage" element={<PostListPage />} />
        <Route path="favoritePage" element={<FavoritePage />} />
        <Route path="writePage" element={<WritePage />} />
      </Route>
      <Route index element={<Home />} />
      <Route path="bookList" element={<BookList />} />
      <Route path="join" element={<Join />} />
      <Route path="registerProfile" element={<RegisterProfile />} />
      <Route path="login" element={<Login />} />
      <Route path="/bookDescription/:id" element={<BookDescription />} />
    </Route>
  )
);

export default router;
