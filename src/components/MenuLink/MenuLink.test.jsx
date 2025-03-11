import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http//localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
  });
  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http//localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
  it('should render with newTab false', () => {
    const { container } = renderTheme(
      <MenuLink link="http//localhost" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem 8rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.76rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        width: 25%;
        left: 50%;
      }

      <a
        class="c0"
        href="http//localhost"
        target="_self"
      >
        <h1>
          Children
        </h1>
      </a>
    `);
  });
});
