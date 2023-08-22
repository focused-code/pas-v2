export const colors = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  LIGHT_BLUE: '#009bde',
  GREEN: "#006837",
  GRAY: "#656565",
  DARK_BLUE: "#0e1040",
};

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "1024px",
  tabletM: "1280px",
  laptop: "1360px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
};

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  tabletM: `(min-width: ${sizes.tabletM})`,
  tabletL: `(min-width: ${sizes.tabletL})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktopL})`,
};

export const maxDevice = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletL: `(max-width: ${sizes.tabletL})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktopL})`,
};

export const STAGGER = 100;
export const duration = { enter: 700, exit: 300 };