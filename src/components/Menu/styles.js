import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Container as HeadingContainer } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: red;
    border-bottom: ${theme.colors.mediumGray} 5px solid;
    background: ${theme.colors.white};
    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
    & ${HeadingContainer} {
      margin-top: 0;
      margin-bottom: 0;
    }
    @media ${theme.media.lteMedium} {
      height: 100vh;
      > ${SectionContainer} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      height: 100vr;
      align-items: center;
      overflow: auto;
    }
    & ${HeadingContainer} {
      padding-bottom: ${theme.spacings.large};
      display: flex;
      justify-content: center;
    }

  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
  `}
`;

export const ButtonContainer = styled.button`
  ${() => css`

  `}
`;
