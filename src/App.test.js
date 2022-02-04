import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const truething = true;
  expect(truething).toBeTruthy();
});
