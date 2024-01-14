import React, { lazy, Suspense } from 'react';

const LazyScrollBanner = lazy(() => import('./ScrollBanner'));

const ScrollBanner = props => (
  <Suspense fallback={null}>
    <LazyScrollBanner {...props} />
  </Suspense>
);

export default ScrollBanner;
