// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, World!', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello, world!/i); // Case-insensitive match
  expect(linkElement).toBeInTheDocument();
});

