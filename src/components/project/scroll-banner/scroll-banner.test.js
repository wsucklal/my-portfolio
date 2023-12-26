import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScrollBanner from './ScrollBanner';

describe('<ScrollBanner />', () => {
  test('it should mount', () => {
    render(<ScrollBanner />);
    
    const scrollBanner = screen.getByTestId('ScrollBanner');

    expect(scrollBanner).toBeInTheDocument();
  });
});