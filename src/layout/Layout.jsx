import { Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';

function Layout() {
  return (
  <> 
    <HeaderBar/>
    <main>
      <Outlet />
    </main>
  </>
);
}
export default Layout;