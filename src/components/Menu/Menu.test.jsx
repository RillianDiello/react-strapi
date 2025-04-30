import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

import linksMock from '../NavLinks/mock';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
