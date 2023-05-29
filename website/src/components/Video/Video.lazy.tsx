import React, { lazy, Suspense } from 'react';

const LazyVideo = lazy(() => import('./Video'));

const Video = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyVideo {...props} />
  </Suspense>
);

export default Video;
