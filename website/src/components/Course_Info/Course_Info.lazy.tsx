import React, { lazy, Suspense } from "react";

const LazyCourseInfo = lazy(() => import("./Course_Info"));

const CourseInfo = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyCourseInfo {...props} />
  </Suspense>
);

export default CourseInfo;
