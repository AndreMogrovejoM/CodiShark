// es is the default dictionary

const country = "Country";
const status = "Status";

const en = {
  global: {
    sideBar: {
      start: "Start",
      myPayments: "My payments",
      logout: "Logout",
      title: "Contact",
      direction: "la Republica 218 - Miraflores"
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
      },
      TablePaymentUser: {
        TableHeader: {
          name: "Name",
          date: "Payment date",
          amount: "Amount paid",
          method: "Payment method",
          state: "State",
          action: ""
        },
        TableRows: {
          pay: "Payout",
          pending: "Pending"
        },
        Pagination: {
          legend: (begin: number, rowsPage: number, total: number) =>
            `Showing records from ${begin} to ${rowsPage}  of a total of ${total} records.`,
          back: "Back",
          next: "Next"
        }
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
  chart: {
    title: "Year's income",
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dic: "December"
  },
  signIn: {
    SignInFormUser: {
      title: "Welcome",
      subtitle:
        "We send a code according to the selected method, enter it below to continue:",
      titleAlt: "Enter the received code",
      subtitleAlt: "We send a code according to the selected method.",
      subtitleAltTwo: "Enter it below to continue:",
      button: "Continue",
      altLogo: "Konecta logo",
      copyright: "Copyright © B12 2022 - All rights reserved.",
      fields: {
        fieldDNI: "DNI",
        fieldCode: "Verification code",
        fieldDate: "Date of issue"
      },
      benefitTitle: "Know the benefits of",
      benefitSubTitle: "Be up to date with your payments",
      ul1: "Credit lines",
      ul2: "Personal loans",
      ul3: "Mortgage credits",
      ul4: "Vehicle credits"
    },
    SignInValidation: {
      greeting: "Welcome",
      instructions: "Please choose a verification method:",
      button: "Continue",
      fields: {
        labelPhone: "Send an SMS code to the number",
        labelEmail: "Send a code to the mail:"
      }
    },
    SignInFormCode: {
      question: "Didn't receive any code? ",
      answer: "Resend verification code",
      method: "Try another verification method",
      button: "Continue"
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
    },
    AdministratorPanel: {
      charges1: "Charges made",
      charges2: "Charges in process",
      footerTitle: "See all",
      name: "Customer's name",
      debt: "Amount of debt"
    },
    Indicator: {
      title: "Here are some indicators",
      year: "YEAR",
      month: "MONTH",
      day: "DAY",
      card1: "Collections Made",
      card2: "Income to the System",
      card3: "Contact requests by call",
      card4: "Payments by wire transfer"
    },
    PanelBanner: {
      greetings: "Hello",
      activity: "This is this month's activity:",
      connections: "Revenues",
      payments: "Recorded payments",
      calls: "Call requests"
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
