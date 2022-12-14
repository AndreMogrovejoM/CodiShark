// es is the default dictionary

const country = "Country";
const status = "Status";

const en = {
  global: {
    settings: {
      title: "Administrator settings",
      success: "Success",
      confirm: "Confirm",
      cancel: "Desactive",
      note: "Note: Make this procedure only one time.",
      confirmed: "2FA procedure confirmed.",
      cancelled: "2FA procedure cancelled.",
      description:
        "If you want to connect your account with google second step verification should use the follow secret code or scan the next QR code, once done press confirm button to continue or cancel button to reject."
    },
    sideBar: {
      start: "Start",
      startAdmin: "Start Admin",
      myPays: "My payments",
      paymentDetails: "Payment details",
      myPayments: "Payment list",
      myClients: "Customer list",
      logout: "Logout",
      title: "Contact",
      direction: "La Republica 218 - Miraflores",
      setting: "Setting 2FA"
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
        TableHeader2: {
          name: "Name",
          capitalDebt: "Capital debt",
          interests: "Interests",
          bills: "Bills",
          punishmentDate: "Punishment date",
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
      },
      TablePaymentAdmin: {
        TableHeader: {
          concept: "Concept",
          originalAmount: "Original amount",
          amountPaid: "Amount paid",
          paymentDate: "Payment date",
          actions: "Actions",
          details: ""
        },
        TableRows: {
          buttonAction: "Download component",
          buttonDetail: "View details"
        },
        TableRowsExpand: {
          entity: "Banking entity:",
          typeDebt: "Type of debt:",
          typeExchange: "Currency type: ",
          date: "Date:"
        },
        Pagination: {
          legend: (begin: number, rowsPage: number, total: number) =>
            `Showing payments from ${begin} to ${rowsPage}  of a total of ${total} payments.`,
          back: "Back",
          next: "Next"
        }
      },
      TableDebtUser: {
        TableRows: {
          buttonExpand: "View details",
          amount: "Original amount",
          discount: "Original amount",
          deadline: "Payment deadline"
        },
        TableRowsExpand: {
          entity: "Banking entity:",
          typeDebt: "Type of debt:",
          typeExchange: "Currency type: ",
          date: "Date:"
        },
        Pagination: {
          legend: (begin: number, rowsPage: number, total: number) =>
            `Showing debts from ${begin} to ${rowsPage}  of a total of ${total} debts.`,
          back: "Back",
          next: "Next"
        }
      }
    },
    ProfileSelectOverlay: {
      user: "User settings",
      signOut: "Sign out"
    },
    select: "Select",
    inputSearch: "Search",
    progress: "Loading..."
  },
  home: {},
  pages: {
    FourZeroThree: {
      title: "You need access",
      subtitle: "Request access or use an account that allows you to access.",
      accessing: "You are accessing as"
    },
    UserPayPanel: {
      title: "List of payments",
      buttonExcel: "Excel",
      buttonPdf: "PDF",
      buttonPrint: "Print"
    },
    UserOperationPanel: {
      title: "List of clients",
      buttonExcel: "Excel",
      buttonPdf: "PDF",
      buttonPrint: "Print"
    },
    AdminPaymentDetails: {
      proof: {
        title: "Proof of payment",
        name: "Names",
        bankEntity: "Bank entity",
        debtType: "Debt type",
        currencyType: "Currency type",
        paymentMethod: "Payment method",
        date: "Date",
        hour: "Hour",
        paymentcode: "Payment code",
        originalAmount: "original amount",
        discount: "Discount",
        subtotal: "Subtotal",
        amountPaid: "Amount paid",
        buttons: {
          pdf: "Download PDF",
          email: "Sent by mail",
          back: "Back"
        }
      },
      card: {
        title: "¡Thank you for your payment!",
        subtitle: "Now, you can a lot of the benefits that go",
        alt: "Profile photo"
      }
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
      titleAlt: "We need to identify you to continue",
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
    },
    PanelBannerClient: {
      title: "KNOW THE PROMOTIONS WE HAVE FOR YOU:",
      paragraph1: "-Reduction of up to 70% of debt",
      paragraph2: "-Campaigns for new credit",
      paragraph3: "-Leveling in credit bureaus"
    },
    CardImageOne: {
      title: "Live a debt-free life",
      subtitle: "Living peacefully is priceless"
    },
    CardImageTwo: {
      subtitle1: "“to pay off my debt was to reach the",
      subtitle2: "financial freedom, and that freedom",
      subtitle3: "helped me achieve my dreams”"
    },
    IndicatorsClientOne: {
      greetings: "Welcome"
    },
    IndicatorsClientTwo: {
      debt: "Current Debt"
    },
    Summary: {
      title:
        "Here we provide the amount of your debt and the deadlines to make your payments:"
    },
    InformationClient: {
      title: "Card payment ",
      subtitle: "We accept the following payment methods:",
      subtitle2: "You can also pay with your debit cards",
      title2: "Bank transfer",
      subtitle3: "BANK",
      subtitle4: "Checking account soles",
      subtitle5: "Interbank account soles",
      paragraph:
        "After making the deposit, please send us the voucher to 900 415 521 or to atencion@b12.pe, indicating the transaction number.",
      subtitle6: "Generate your transaction number to make your payment",
      button: "PAY",
      button2: "GENERATE TRANSACTION NUMBER"
    },
    PaymentRejected: {
      button: "Try again",
      title: "Payment details",
      paragraph1: "Amount Paid:",
      paragraph2: "Date:",
      paragraph3: "Time:",
      paragraph4: "Amount Paid:",
      success: "Successful Payment",
      approved: "Your payment has been successfully approved",
      rejected: "Payment Rejected",
      disapproved: "Payment could not be processed"
    },

    ClientContainer: {
      title:
        "Here we provide the amount of your debt and the deadlines to make your payments:",
      copyright: "Copyright B12 2022 - All rights reserved."
    },
    OperationNumberModal: {
      operation: "Your operation number is",
      current: "Checking account soles",
      interbank: "Interbank account soles",
      amount: "Amount payable",
      offer: "Offer available until",
      copy: "Copy",
      paragraph:
        "Go to the nearest agency and make the deposit indicating the operation number, you can also make interbank transfers from the App of your choice."
    }
  },
  components: {
    UserDetails: {
      titleDetails: "Customer details",
      paragraphDetails: "Select a customer to view details",
      alt: "Payment details",
      name: "Name:",
      lastName: "Last names:",
      documentType: "Document type:",
      documentNumber: "Document number:",
      birthDate: "Birth date:",
      gender: "Gender:",
      district: "District:",
      address: "Address:",
      email: "Email:",
      phone: "Phone:",
      mobile: "Mobile:"
    },
    OperationalDetails: {
      titleDetails: "Payment details",
      paragraphDetails: "Select a payment to view details",
      alt: "Payment details",
      customerName: "Customer Name:",
      amountPaid: "Amount Paid:",
      date: "Date:",
      hour: "Hour:",
      paymentMedium: "Payment Medium:",
      paymentStatus: "Payment Status:",
      button: "View payment receipt"
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
