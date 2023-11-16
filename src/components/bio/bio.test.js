import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bio from './Bio';

describe('<Bio />', () => {
  test('it should mount', () => {
    render(<Bio />);
    
    const bio = screen.getByTestId('Bio');

    expect(bio).toBeInTheDocument();
  });
});