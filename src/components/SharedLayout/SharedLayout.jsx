import { Outlet } from 'react-router-dom';
import { Header } from 'components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
