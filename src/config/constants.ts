// Kioscos Dashboard Project constants

export const platform = "WEB";

const CONSTANTS = {
  // HTML title tag text
  TITLE: "Konecta Digital Mk Agency",
  // General settings
  // Routing
  ROUTES: {
    // Router where the user will land initially to check authentication
    ENTRY_PATH: "/",
    ADMIN_ENTRY_PATH: "/administratorPanel",
    // Router where the user will land if not authenticated
    NO_AUTH_PATH: "/signin",
    // admin panel
    ADMIN_PAYMENT_LIST: "/adminPaymentList",
    ADMIN_CLIENT_LIST: "/adminClientList",
    USER_PAYMENT_DETAILS: "/userPaymentDetails",
    USER_PAYMENT_LIST: "/userPaymentList",
    SETTINGS: "/settings"
  },
  ACCOUNT_NUMBER: "191 5435 5435 3455",
  CCI_ACCOUNT_NUMBER: "191 5435 5435 3455 5345",
  API: {
    REACT_APP_API_URL: "https://cobranza.testcodishark.com/public/api",
    REACT_APP_IZI_PAY_URL: "https://api.micuentaweb.pe/",
    IZI_PAY_USER_NAME: "89289758",
    IZI_PAY_USER_PASSWORD:
      "testpassword_7vAtvN49E8Ad6e6ihMqIOvOHC6QV5YKmIXgxisMm0V7Eq",
    IZI_PAY_PUBLIC_KEY:
      "89289758:testpublickey_TxzPjl9xKlhM0a6tfSVNilcLTOUZ0ndsTogGTByPUATcE",
    REACT_APP_PLATFORM: "WEB",
    // Mock services, change to false if you don't want to mock
    MOCK_SERVICES: false,
    // TODO: If true a registered user with address, billing data and orders will be present
    MOCK_WITH_INITIAL_USER_DATA: false,
    // Default max waiting time for a request reply
    DEFAULT_REQUEST_TIMEOUT: 10000,
    // Excluded status codes that should not be logged
    EXCLUDED_LOGGER_STATUS_CODES: [422],
    // Included environments that should be logged
    INCLUDED_LOGGER_ENVS: ["dev", "production"]
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
