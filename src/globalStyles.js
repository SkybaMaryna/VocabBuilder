import { createGlobalStyle } from 'styled-components';
import FixelDisplayWoff2 from './fonts/FixelDisplay-Regular.woff2';
import FixelDisplayTtf from './fonts/FixelDisplay-Regular.ttf';
import FixelDisplayMedWoff2 from './fonts/FixelDisplay-Medium.woff2';
import FixelDisplayMedTtf from './fonts/FixelDisplay-Medium.ttf';
import FixelDisplaySBoldWoff2 from './fonts/FixelDisplay-SemiBold.woff2';
import FixelDisplaySBoldTtf from './fonts/FixelDisplay-SemiBold.ttf';
import FixelDisplayBoldWoff2 from './fonts/FixelDisplay-Bold.woff2';
import FixelDisplayBoldTtf from './fonts/FixelDisplay-Bold.ttf';
import SFProTextTtf from './fonts/SFProText-Regular.ttf';
import SFProDisplayLightOtf from './fonts/SF-Pro-Display-Light.otf';
import SFProDisplayOtf from './fonts/SF-Pro-Display-Regular.otf';

const GlobalStyle = createGlobalStyle`

:root {
//colors
--black: #121417; 
--black-10: rgba(18, 20, 23, 0.1);
--black-20: rgba(18, 20, 23, 0.2);
--black-50: rgba(18, 20, 23, 0.5);
--black-80: rgba(18, 20, 23, 0.8);
--white: #FCFCFC;
--white-30:rgba(252, 252, 252, 0.30);
--white-40:rgba(252, 252, 252, 0.40);
--white-80:rgba(252, 252, 252, 0.80);
--green: #85AA9F;
--green-10: rgba(133, 170, 159, 0.1);
--light-green: #A5C0B8;
--red: rgba(216, 0, 39, 1);
--bright-green: rgba(60, 191, 97, 1);
--stat-green: #2BD627
--gray: #DBDBDB;
--error-message: #D80027;
--success-message:#3CBF61;

// fonts
--FixelDisplay: 'FixelDisplay', sans-serif;
--FixelDisplay-Medium: 'FixelDisplay-Medium', sans-serif;
--FixelDisplay-SemiBold: 'FixelDisplay-SemiBold', sans-serif;
--FixelDisplay-Bold: 'FixelDisplay-Bold', sans-serif;
--SFProText:'SFProText', sans-serif;
--SFProDisplay-Light: 'SFProDisplay-Light', sans-serif;
--SFProDisplay: 'SFProDisplay', sans-serif;

// other
--slow-transform: 500ms ease;
--fast-transform: 300ms ease;
}


body {
  margin: 0;
  font-family: var(--FixelDisplay-Medium);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
li {
  list-style: none;
}
a {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

p {
  padding: 0;
  margin: 0;
}

  //Fonts
@font-face {
  font-family: 'FixelDisplay';
  src: url(${FixelDisplayWoff2}) format('woff2'),
  url(${FixelDisplayTtf}) format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'FixelDisplay-Medium';
  src: url(${FixelDisplayMedWoff2}) format('woff2'),
  url(${FixelDisplayMedTtf}) format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'FixelDisplay-SemiBold';
  src: url(${FixelDisplaySBoldWoff2}) format('woff2'),
  url(${FixelDisplaySBoldTtf}) format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'FixelDisplay-Bold';
  src: url(${FixelDisplayBoldWoff2}) format('woff2'),
  url(${FixelDisplayBoldTtf}) format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'SFProText';
  src: url(${SFProTextTtf}) format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'SFProDisplay-Light';
  src: url(${SFProDisplayLightOtf}) format('opentype');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'SFProDisplay';
  src: url(${SFProDisplayOtf}) format('opentype');
  font-weight: 400;
  font-style: normal;
}
`;

export default GlobalStyle;
