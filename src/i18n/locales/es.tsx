import { Dictionary } from "i18n/i18n.types";

const status = "Estado";

const es: Dictionary = {
  global: {
    sideBar: {
      start: "Inicio",
      myPayments: "Mis pagos",
      logout: "Cerrar sesión"
    },
    table: {
      TableHeader: {
        import: "Importar",
        export: "Exportar"
      },
      TableFilters: {
        country: "País",
        search: "Buscar",
        show: "Mostrar",
        status,
        statusAll: "Todos",
        filters: "Filtros",
        sort: "Ordenar",
        startDate: "Fecha inicio",
        endDate: "Fecha fin"
      },
      TableEmpty: {
        title: "Parece que todavía no tienes datos",
        buttonText: "Agregar nuevo"
      },
      TableError: {
        title: "Ocurrió un error mientras cargábamos tus datos",
        buttonText: "Volver a intentar"
      }
    },
    ProfileSelectOverlay: {
      user: "Configuraciones de usuario",
      signOut: "Cerrar Sesión"
    },
    select: "Seleccionar"
  },
  home: {},
  pages: {
    FourZeroThree: {
      title: "Necesitas accesos",
      subtitle: "Solicita acceso o usa una cuenta que te permita acceder.",
      accessing: "Estás accediendo como"
    }
  },
  signIn: {
    SignInFormUser: {
      title: "BIENVENIDO(A)",
      subtitle: "Necesitamos identificarte para poder continuar",
      button: "Continuar",
      altLogo: "Logo de Konecta"
    },
    SignInForm: {
      welcome: "Bienvenido/a",
      instructions: "Ingresa tus datos para acceder a tus cuentas",
      emailPlaceholder: "hola@correo.com",
      passwordPlaceholder: "contraseña",
      signIn: "Iniciar sesión"
    }
  },
  utils: {
    validations: {
      fieldRequired: "Este campo es requerido",
      includesLowerCase: "Se necesita al menos un carácter en minúscula",
      includesUpperCase: "Se necesita al menos un carácter en mayúscula",
      includesNumber: "Se necesita al menos un carácter numérico",
      includesSpecialCharacter: (validSpecialCharacters: string) =>
        `Incluye por lo menos un carácter especial ${validSpecialCharacters}`,
      noSpecialCharacterAllowed: (validSpecialCharacters: string) =>
        `Los caracteres especiales ${validSpecialCharacters} no están permitidos`,
      minPasswordLength: (min: number) => `Ingresa al menos ${min} caracteres`,
      stringMinLength: (min: number) => `Ingresa al menos ${min} caracteres`,
      stringMaxLength: (max: number) => `Ingresa como máximo ${max} caracteres`,
      whiteSpaceOnly: "El campo no puede solo incluir caracteres en blanco",
      noWhiteSpaceAllowed: "El campo no puede incluir caracteres en blanco",
      lettersAndWhitespace:
        "El campo solo debería incluir caracteres alfabéticos y espacios",
      lettersNumbersAndWhitespace:
        "El campo solo debería incluir caracteres alfabéticos, numéricos y espacios",
      validEmail: "Ingresa un correo electrónico valido",
      pattern: (pattern: string) => `El campo no concuerda ${pattern}`
    }
  }
};

export default es;
