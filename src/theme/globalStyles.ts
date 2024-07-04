import styled, { createGlobalStyle } from 'styled-components';

import Light from './fonts/Inter-Light.woff2';
import Regular from './fonts/Inter-Regular.woff2';
import Bold from './fonts/Inter-Bold.woff2';
import ExtraBold from './fonts/Inter-ExtraBold.woff2';

import shurikenSVG from '/shuriken.svg'

export const theme = {
    colors: {
        accent: '#005FF1',
        black: '#0A0000',
        white: '#FFFFFF',
    },
};

export default createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${Light}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${Regular}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${Bold}) format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${ExtraBold}) format('woff2');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.3;
        color: ${theme.colors.black};
        margin: 0;
        padding: 0;
        background-color: ${theme.colors.white};
    }

    h1, h2, h3, h4, h5, h6, ul {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none
    }
`;

interface TitleProps {
    fontSize: number,
    $shuriken?: string
}


export const Title = styled.h2<TitleProps>`
  position: relative;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: 800;
  max-width: 800px;

  ${({ $shuriken }) =>
    $shuriken === 'on' &&
    `
    &::after {
      position: absolute;
      content: '';
      width: 44px;
      height: 44px;
      right: 0;
      top: 30px;
      background-image: url(${shurikenSVG});
      background-repeat: no-repeat;
      background-size: cover;
    }
  `}
`;

export const Text = styled.div`
  max-width: 650px;
  p{
    font-size: 24px;
  }
`
Text.displayName = 'Text'

