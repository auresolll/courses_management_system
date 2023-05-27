import React, { lazy, Suspense } from 'react';

const LazyLayoutCardDetail = lazy(() => import('./LayoutCardDetail'));

const LayoutCardDetail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayoutCardDetail {...props} />
  </Suspense>
);

export default LayoutCardDetail;
