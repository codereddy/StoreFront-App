import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('My Fabulous Store', () => {
  render(<App />);
  const Element = screen.getByText(/My Fabulous Store/i);
  expect(Element).toBeInTheDocument();
});
