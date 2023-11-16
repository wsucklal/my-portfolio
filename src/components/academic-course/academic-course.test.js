import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AcademicCourse from './AcademicCourse';

describe('<AcademicCourse />', () => {
  test('it should mount', () => {
    render(<AcademicCourse />);
    
    const academicCourse = screen.getByTestId('AcademicCourse');

    expect(academicCourse).toBeInTheDocument();
  });
});