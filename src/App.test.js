import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/quote/i);
  const linkElementTwo = screen.getByText(/calculator/i)
  expect(linkElement).toBeInTheDocument();
  expect(linkElementTwo).toBeInTheDocument();
});
