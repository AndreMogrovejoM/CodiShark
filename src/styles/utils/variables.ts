const palette = {
  empty: "", // Fixes a bug with styled components that appends a coma
  primary: "rgb(63,168,204)",
  darkerPrimary: "hsla(349, 100%, 35%, 1)",
  secondary: "hsla(240, 6%, 97%)",
  black: "hsla(0, 0%, 0%)",
  white: "hsla(0, 0%, 100%)",
  grey: "hsla(0, 0%, 85%,1)"
};

const fonts = {};

export const columns = 12;

export const columnsMaxTotalWidth = "120rem";

export const gridMinMargin = "2rem";

export const gridTotalMinMargin = `calc(${gridMinMargin} * 2)`;

export const gridMargin = `minmax(${gridMinMargin}, 1fr)`;

export const columnsTotalWidth = `calc(100% - ${gridTotalMinMargin})`;

export const columnMaxWidth = `calc(${columnsMaxTotalWidth} / ${columns})`;

export const columnWidth = `minmax(0, min(calc(${columnsTotalWidth} / ${columns}), ${columnMaxWidth}))`;

const sizes = {
  page: {
    minWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    maxWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    minHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    maxHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    columns: `[start] ${gridMargin} [content-start] repeat(${columns}, ${columnWidth}) [content-end] ${gridMargin} [end]`
  },
  sidebar: {
    maxWidth: "6.8rem"
  },
  menu: {
    width: "24rem",
    widthMobile: "18.6rem"
  },
  navbar: {
    height: "5.6rem"
  },
  containerHeader: "6.4rem"
};

const variables = { palette, fonts, sizes };

export default variables;
