const size = {
  mobileL: '425px',
  tabletS: '600px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  laptopXL: '1700px',
  desktop: '1920px',
};

export const device = {
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletS: `(min-width: ${size.tabletS})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  laptopXL: `(min-width: ${size.laptopXL})`,
  desktop: `(min-width: ${size.desktop})`,
};
