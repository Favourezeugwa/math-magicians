import { render, screen } from '@testing-library/react';
import App from './App';

test('Test UI text', () => {
  render(<App />);
  const linkElement = screen.getByText(/quote/i);
  const linkElementTwo = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElementTwo).toBeInTheDocument();
});
