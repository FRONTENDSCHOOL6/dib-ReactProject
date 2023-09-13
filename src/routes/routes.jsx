import Layout from '@/layout/Layout.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import Home from '@/pages/Home';
import WritePage from '@/pages/WritePage';
import Login from '@/pages/Login';
import SignIn from '@/pages/SignIn';
import BookList from '@/pages/BookList';
import BookDescription from '@/pages/BookDescription';
import RegisterProfile from '@/pages/RegisterProfile';
import PostListPage from '@/pages/PostListPage';
import FavoritePage from '@/pages/FavoritePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="writePage" element={<WritePage />} />
      <Route path="login" element={<Login />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="bookList" element={<BookList />} />
      <Route path="bookDescription" element={<BookDescription />} />
      <Route path="registerProfile" element={<RegisterProfile />} />
      <Route path="postListPage" element={<PostListPage />} />
      <Route path="favoritePage" element={<FavoritePage />} />
    </Route>
  )
);

export default router;
