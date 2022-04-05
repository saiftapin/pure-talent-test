import React from 'react';
import { render, screen } from '@testing-library/react';
import Customers from './pages/customers';



describe('<Customer />', () => {
  it('renders customer', () => {
      const {container} = render(<Customers />);
      expect(container).toMatchSnapshot();
  });
});