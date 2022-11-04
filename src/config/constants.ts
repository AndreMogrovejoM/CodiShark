// Kioscos Dashboard Project constants

export const platform = "web";

const CONSTANTS = {
  // HTML title tag text
  TITLE: "CodiShark collection system",
  // General settings
  // Routing
  ROUTES: {
    // Router where the user will land initially to check authentication
    ENTRY_PATH: "/",
    // Router where the user will land if not authenticated
    NO_AUTH_PATH: "/signin"
  },
  // CSS Break Points
  BREAKPOINTS: {
    mobile: 420,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
    hd: 2560
  },
  // Time format
  FORMAT: "mm:ss"
};

export default CONSTANTS;
