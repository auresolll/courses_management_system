import React, { lazy, Suspense } from "react";

const LazyCardGallery = lazy(() => import("./CardGallery"));

const CardGallery = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyCardGallery {...props} />
  </Suspense>
);

export default CardGallery;
