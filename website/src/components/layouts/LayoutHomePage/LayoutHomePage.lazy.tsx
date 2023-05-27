import React, { lazy, Suspense } from 'react';

const LazyLayoutHomePage = lazy(() => import('./LayoutHomePage'));

const LayoutHomePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayoutHomePage {...props} />
  </Suspense>
);

export default LayoutHomePage;
