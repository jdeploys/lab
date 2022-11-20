import '@/styles/index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';
import '@/shared/installer';
import SpinnerLoader from '@/components/loader/SpinnerLoader';
import { Suspense } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { setting } from '@/shared/setting';

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <GoogleOAuthProvider clientId={setting.gcClientId}>
        <RouterProvider router={router} fallbackElement={<SpinnerLoader />} />
      </GoogleOAuthProvider>
    </Suspense>
  );
};

export default App;
