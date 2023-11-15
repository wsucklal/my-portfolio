import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseCard from './CourseCard';

describe('<CourseCard />', () => {
  test('it should mount', () => {
    render(<CourseCard />);
    
    const courseCard = screen.getByTestId('CourseCard');

    expect(courseCard).toBeInTheDocument();
  });
});