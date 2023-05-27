import React, { lazy, Suspense } from 'react';

const LazyGrades = lazy(() => import('./Grades'));

const Grades = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGrades {...props} />
  </Suspense>
);

export default Grades;
