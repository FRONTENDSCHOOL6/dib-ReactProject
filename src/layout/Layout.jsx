import { Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function Layout() {
  return (
    <>
      <HeaderBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </>
  );
}
export default Layout;
