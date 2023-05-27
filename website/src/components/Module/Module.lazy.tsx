import React, { lazy, Suspense } from 'react';

const LazyModule = lazy(() => import('./Module'));

const Module = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyModule {...props} />
  </Suspense>
);

export default Module;
