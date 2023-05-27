import React, { lazy, Suspense } from 'react';

const LazyCardPreview = lazy(() => import('./CardPreview'));

const CardPreview = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCardPreview {...props} />
  </Suspense>
);

export default CardPreview;
