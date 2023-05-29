import React, { lazy, Suspense } from 'react';

const LazyLectures = lazy(() => import('./Lectures'));

const Lectures = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLectures {...props} />
  </Suspense>
);

export default Lectures;
