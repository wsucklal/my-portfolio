import React, { lazy, Suspense } from 'react';

const LazyCourseList = lazy(() => import('./CourseList'));

const CourseList = props => (
  <Suspense fallback={null}>
    <LazyCourseList {...props} />
  </Suspense>
);

export default CourseList;
