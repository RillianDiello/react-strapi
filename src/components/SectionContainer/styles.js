import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  max-width: 320rem;
  margin: 0 auto;
  padding: ${theme.spacings.large};
  width: 100%;
  `}
`;
