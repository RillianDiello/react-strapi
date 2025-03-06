import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render with default values', () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading colorDark>text</Heading>
      </ThemeProvider>,
    );
    const heading = screen.getByRole('heading', { name: /text/i });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
    });
  });
  it('should render with dark color', () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading colorDark={false}>text</Heading>
      </ThemeProvider>,
    );
    const heading = screen.getByRole('heading', { name: /text/i });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });
  it('should render with uppercase letters', () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading uppercase={true}>text</Heading>
      </ThemeProvider>,
    );
    const heading = screen.getByRole('heading', { name: /text/i });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
  it('should render correact heading element', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Heading as="h6">text</Heading>
      </ThemeProvider>,
    );
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
