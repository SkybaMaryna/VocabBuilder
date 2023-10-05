import { Outlet } from 'react-router-dom';
import { Header } from 'components';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
