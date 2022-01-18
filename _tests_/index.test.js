// test/pages/index.test.js

import React from 'react';
// Using render and screen from test-utils.js instead of
import { render, screen } from '@testing-library/react';
// import { render, screen } from '../test-utils';
import Home from '@pages/index';

describe('Home', () => {
    it('should render the heading', () => {
        render(<Home />);

        const heading = screen.getByText(/THIS IS HOME/i);

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument();
    });
});
