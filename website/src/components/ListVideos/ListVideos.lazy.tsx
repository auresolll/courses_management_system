import React, { lazy, Suspense } from "react";

const LazyListVideos = lazy(() => import("./ListVideos"));

const ListVideos = (
  props: JSX.IntrinsicAttributes & {
    children?: React.ReactNode;
    lectures: string;
  }
) => (
  <Suspense fallback={null}>
    <LazyListVideos {...props} />
  </Suspense>
);

export default ListVideos;
