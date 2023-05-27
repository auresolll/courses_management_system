import React, { lazy, Suspense } from 'react';

const LazyProtectedLayout = lazy(() => import('./ProtectedLayout'));

const ProtectedLayout = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProtectedLayout {...props} />
  </Suspense>
);

export default ProtectedLayout;
