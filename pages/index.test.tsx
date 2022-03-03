// test/pages/index.test.js

import React from 'react';
// Using render and screen from test-utils.js instead of
import { getByTestId, render, screen } from '@testing-library/react';
// import { render, screen } from '../test-utils';
import Home from '@pages/index';

jest.mock('@components/Navbar', () => ({
  __esModule: true,
  default: function Navbar({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  },
}));

xdescribe('Home', () => {
  it('should render the header', () => {
    const { getByTestId } = render(<Home />);
    getByTestId('header');
  });
  it('renders the subtitle', () => {
    render(<Home />);
    const subtitle = screen.getByText(/CONNECT WITH SHELTERS/i);
    expect(subtitle).toBeInTheDocument();
  });
  it('renders the subsubtitle', () => {
    render(<Home />);
    const subsubtitle = screen.getByText(
      /BECOME A TRAVEL GUARDIAN FOR ADOPTED ANIMALS/i
    );
    expect(subsubtitle).toBeInTheDocument();
  });
  it('renders the Navbar', () => {
    const { getByTestId } = render(<Home />);
    getByTestId('navbar');
  });
});
