import React, { lazy, Suspense } from 'react';

const LazyAcademicCourse = lazy(() => import('./AcademicCourse'));

const AcademicCourse = props => (
  <Suspense fallback={null}>
    <LazyAcademicCourse {...props} />
  </Suspense>
);

export default AcademicCourse;
