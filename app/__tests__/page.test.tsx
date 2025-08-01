import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../(routes)/page';

describe('Home Page', () => {
  it('renders Dashboard heading', async () => {
    render(await Home());
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
  });
});
