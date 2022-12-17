import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = <h1 className='text-4xl text-rose-600 font-mono font-semibold'>{screen.getByText(/learn react/i)}</h1>;
  expect(linkElement).toBeInTheDocument();
});
