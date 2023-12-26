import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScrollCard from './ScrollCard';

describe('<ScrollCard />', () => {
  test('it should mount', () => {
    render(<ScrollCard />);
    
    const scrollCard = screen.getByTestId('ScrollCard');

    expect(scrollCard).toBeInTheDocument();
  });
});