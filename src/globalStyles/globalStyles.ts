import { createGlobalStyle } from 'styled-components';

import Light from './Inter-Light.woff2';
import Regular from './Inter-Regular.woff2';
import Bold from './Inter-Bold.woff2';
import ExtraBold from './Inter-ExtraBold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: 
            url(${Light}) format('woff2'),
            url(${Regular}) format('woff2'),
            url(${Bold}) format('woff2'),
            url(${ExtraBold}) format('woff2');
        font-weight: 300 800;
        font-style: normal;
        font-display: swap;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #0A0000;
        margin: 0;
        padding: 0;
        background-color: #fff; 
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
    }
`;
