import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  test('it should mount', () => {
    render(<CourseList />);
    
    const courseList = screen.getByTestId('CourseList');

    expect(courseList).toBeInTheDocument();
  });
});