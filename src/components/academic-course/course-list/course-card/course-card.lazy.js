import React, { lazy, Suspense } from 'react';

const LazyCourseCard = lazy(() => import('./CourseCard'));

const CourseCard = props => (
  <Suspense fallback={null}>
    <LazyCourseCard {...props} />
  </Suspense>
);

export default CourseCard;
