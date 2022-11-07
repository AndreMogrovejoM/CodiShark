// es is the default dictionary

const country = "Country";
const status = "Status";

const en = {
  global: {
    sideBar: {
      start: "Start",
      myPayments: "My payments",
      logout: "Logout"
    },
    button: {
      text: "Loading..."
    },
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
  pages: {
    FourZeroThree: {
      title: "You need access",
      subtitle: "Request access or use an account that allows you to access.",
      accessing: "You are accessing as"
    }
  },
  signIn: {
    SignInFormUser: {
      title: "Welcome",
      subtitle: "We need to identify you in order to continue",
      button: "Continue",
      altLogo: "Konecta logo",
      copyright: "Copyright © B12 2022 - All rights reserved.",
      fields: {
        fieldDNI: "DNI",
        fieldCode: "Verification code",
        fieldDate: "Date of issue"
      }
    },
    SignInForm: {
      welcome: "Welcome",
      instructions: "Enter your information to access your accounts",
      emailPlaceholder: "hellow@email.com",
      passwordPlaceholder: "password",
      signIn: "Sign in"
    },
    SignInAdministrator: {
      step1: {
        user: "User",
        password: "Password",
        continue: "Continue",
        copyright: "Copyright © B12 2022 - All rights reserved.",
        welcome: "Welcome",
        greetings: "Hello! Follow this simple steps"
      },
      step2: {
        code: "Enter the code sent to your cell phone number to continue:",
        continue: "Enter",
        copyright: "Copyright © B12 2022 - All rights reserved.",
        welcome: "Welcome",
        place: "verification code"
      }
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
