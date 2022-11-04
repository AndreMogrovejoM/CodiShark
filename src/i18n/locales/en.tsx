// es is the default dictionary

const country = "Country";
const status = "Status";

const en = {
  global: {
    table: {
      TableHeader: {
        import: "Import",
        export: "Export"
      },
      TableFilters: {
        country,
        search: "Search",
        show: "Show",
        status,
        statusAll: "All",
        filters: "Filters",
        sort: "Sort",
        startDate: "Start date",
        endDate: "End date"
      },
      TableEmpty: {
        title: "It looks like you don't have records yet",
        buttonText: "Create new"
      },
      TableError: {
        title: "An error occurred while trying to load your records",
        buttonText: "Try again"
      }
    },
    ProfileSelectOverlay: {
      user: "User settings",
      signOut: "Sign out"
    },
    select: "Select"
  },
  home: {},
  dashboard: {
    title: "Kioscos dashboard",
    active: "active",
    inactive: "inactive",
    empty: "",
    error: "",
    buttonText: "",
    yes: "yes",
    no: "no",
    storeName: "Store name",
    storeId: "Store",
    kiosco: "Kiosco",
    startSell: "Start sell",
    cartActivity: "Cart activity",
    closeSell: "Close sell",
    lastSell: "Last sell",
    shouldUpdate: "Should update",
    lastRemoteUpdate: "Last remote update",
    errors: "Errors",
    allStores: "All stores",
    see: "See",
    reportTitle: "Kiosco errors",
    label: "Label",
    response: "Response",
    date: "Date",
    time: "Time"
  },
  pages: {
    FourZeroThree: {
      title: "You need access",
      subtitle: "Request access or use an account that allows you to access.",
      accessing: "You are accessing as"
    }
  },
  signIn: {
    SignInForm: {
      title: "WELCOME",
      subtitle: "We need to identify you in order to continue",
      button: "Continue",
      altLogo: "Konecta logo"
    }
  },
  utils: {
    validations: {
      fieldRequired: "This field is required",
      includesLowerCase: "Include at least one lower case character",
      includesUpperCase: "Include at least one upper case character",
      includesNumber: "Include at least one number",
      includesSpecialCharacter: (validSpecialCharacters: string) =>
        `Include at least one special character ${validSpecialCharacters}`,
      noSpecialCharacterAllowed: (validSpecialCharacters: string) =>
        `Special characters ${validSpecialCharacters} are not allowed`,
      minPasswordLength: (min: number) =>
        `The minimum length should be ${min} characters`,
      stringMinLength: (min: number) => `Enter at least ${min} characters`,
      stringMaxLength: (max: number) => `Enter no more than ${max} characters`,
      whiteSpaceOnly: "The field cannot only include whitespace characters",
      noWhiteSpaceAllowed: "The field cannot include whitespaces",
      lettersAndWhitespace:
        "The field should only contain alphabetic characters and spaces",
      lettersNumbersAndWhitespace:
        "The field should only contain alphabetic characters, numbers and spaces",
      validEmail: "Enter a valid email address",
      pattern: (pattern: string) => `The field does not match ${pattern}`
    }
  }
};

export default en;
