const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const devices = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  retina: '(-webkit-min-device-pixel-ratio: 2)',
};
