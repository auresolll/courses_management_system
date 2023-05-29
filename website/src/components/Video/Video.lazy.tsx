import React, { lazy, Suspense } from "react";

const LazyVideo = lazy(() => import("./Video"));

const Video = (
  props: JSX.IntrinsicAttributes & {
    children?: React.ReactNode;
    video: {
      id: string;
      url: string;
      name: string;
    };
  }
) => (
  <Suspense fallback={null}>
    <LazyVideo {...props} />
  </Suspense>
);

export default Video;
