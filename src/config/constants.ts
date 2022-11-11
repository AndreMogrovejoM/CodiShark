// Kioscos Dashboard Project constants

import { FamilyRestroomOutlined } from "@mui/icons-material";

export const platform = "web";

const CONSTANTS = {
  // HTML title tag text
  TITLE: "CodiShark collection system",
  // General settings
  // Routing
  ROUTES: {
    // Router where the user will land initially to check authentication
    ENTRY_PATH: "/",
    ADMIN_ENTRY_PATH: "/administratorPanel",
    // Router where the user will land if not authenticated
    NO_AUTH_PATH: "/signin"
  },
  API: {
    REACT_APP_API_URL: "https://cobranza.testcodishark.com/public/api",
    REACT_APP_PLATFORM: "WEB",
    // Mock services, change to false if you don't want to mock
    MOCK_SERVICES: FamilyRestroomOutlined,
    // TODO: If true a registered user with address, billing data and orders will be present
    MOCK_WITH_INITIAL_USER_DATA: false,
    // Default max waiting time for a request reply
    DEFAULT_REQUEST_TIMEOUT: 10000,
    // Excluded status codes that should not be logged
    EXCLUDED_LOGGER_STATUS_CODES: [422],
    // Included environments that should be logged
    INCLUDED_LOGGER_ENVS: ["staging", "production"]
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
  FORMAT: "mm:ss",
  INTERVAL: 1000,
  INITIAL_TIME: 5 * 1000 * 60
};

export default CONSTANTS;
