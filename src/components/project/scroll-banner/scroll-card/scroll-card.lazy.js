import React, { lazy, Suspense } from 'react';

const LazyScrollCard = lazy(() => import('./ScrollCard'));

const ScrollCard = props => (
  <Suspense fallback={null}>
    <LazyScrollCard {...props} />
  </Suspense>
);

export default ScrollCard;
