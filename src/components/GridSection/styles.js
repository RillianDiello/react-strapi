import styled from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const Container = styled.div`

`;

export const Grid = styled.div`
  ${() => `
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
  `}
`;

export const GridElement = styled.div`
  ${() => `
    ${HeadingContainer}{
      position: relative;
      left: 5rem;
    }
    ${HeadingContainer}:before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem};
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`;
