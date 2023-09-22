import { Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import ScrollButton from '@/components/common/ScrollButton';

function Layout() {
  return (
    <>
      <HeaderBar />
      <main>
        <Outlet />
        <ScrollButton/>
      </main>
      <FooterBar />
    </>
  );
}
export default Layout;
