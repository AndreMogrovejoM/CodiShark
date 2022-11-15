import { Dictionary } from "i18n/i18n.types";

const status = "Estado";

const es: Dictionary = {
  global: {
    sideBar: {
      start: "Inicio",
      myPayments: "Mis pagos",
      logout: "Cerrar sesión",
      title: "Contacto",
      direction: "la Republica 218 - Miraflores"
    },
    button: {
      text: "Cargando..."
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
      },
      TablePaymentUser: {
        TableHeader: {
          name: "Nombre",
          date: "Fecha de pago",
          amount: "Monto pagado",
          method: "Método de pago",
          state: "Estado",
          action: ""
        },
        TableRows: {
          pay: "Pagado",
          pending: "Pendiente"
        },
        Pagination: {
          legend: (begin: number, rowsPage: number, total: number) =>
            `Mostrando registros del ${begin} al ${rowsPage} de un total de ${total} registros.`,
          back: "Anterior",
          next: "Siguiente"
        }
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
  chart: {
    title: "Ingresos de este año",
    jan: "Enero",
    feb: "Febrero",
    mar: "Marzo",
    apr: "Abril",
    may: "Mayo",
    jun: "Junio",
    jul: "Julio",
    aug: "Agosto",
    sep: "Septiembre",
    oct: "Octubre",
    nov: "Noviembre",
    dic: "Diciembre"
  },
  signIn: {
    SignInFormUser: {
      title: "Bienvenido(a)",
      subtitle:
        "Enviamos un código según el método seleccionado, Ingréselo a continuación para continuar:",
      titleAlt: "Ingrese el código recibido",
      subtitleAlt: "Enviamos un código según el método seleccionado.",
      subtitleAltTwo: "Ingreselo a continuación para continuar:",
      button: "Continuar",
      altLogo: "Logo de Konecta",
      copyright: "Copyright © B12 2022 - Todos los derechos reservados.",
      fields: {
        fieldDNI: "DNI",
        fieldCode: "Cod. Verificador",
        fieldDate: "Fecha de Emisión"
      },
      benefitTitle: "Conoce los beneficios de",
      benefitSubTitle: "Estar al día en tus pagos",
      ul1: "Lineas de créditos",
      ul2: "Préstamos personales",
      ul3: "Créditos hipotecarios",
      ul4: "Créditos vehiculares"
    },
    SignInValidation: {
      greeting: "Bienvenido",
      instructions: "Por favor elige un metodo de verificación:",
      button: "Continuar",
      fields: {
        labelPhone: "Enviar un código SMS al número",
        labelEmail: "Enviar un código al correo:"
      }
    },
    SignInFormCode: {
      question: "No recibió ningun código? Reenviar código de verificación ",
      answer: "Reenviar código de verificación ",
      method: "Probar otro método de verificación",
      button: "Continuar"
    },
    SignInForm: {
      welcome: "Bienvenido/a",
      instructions: "Ingresa tus datos para acceder a tus cuentas",
      emailPlaceholder: "hola@correo.com",
      passwordPlaceholder: "contraseña",
      signIn: "Iniciar sesión"
    },
    SignInAdministrator: {
      step1: {
        user: "Usuario",
        password: "Contraseña",
        continue: "Continuar",
        copyright: "Copyright © B12 2022 - Todos los derechos reservados.",
        welcome: "Bienvenido",
        greetings: "¡Hola! Sigue estos simples pasos"
      },
      step2: {
        code: "Ingrese el código enviado a su número de celular para poder continuar:",
        continue: "Ingresar",
        copyright: "Copyright © B12 2022 - Todos los derechos reservados.",
        welcome: "Bienvenido",
        place: "Codigo Verificador"
      }
    },
    AdministratorPanel: {
      charges1: "Cobros realizados",
      charges2: "Cobros en proceso",
      footerTitle: "Ver todos",
      name: "Nombres del cliente",
      debt: "Monto de deuda"
    },
    Indicator: {
      title: "Te mostramos algunos indicadores",
      year: "AÑO",
      month: "MES",
      day: "DIA",
      card1: "Cobros Realizados",
      card2: "Ingresos al Sistema",
      card3: "Solicitudes de contacto por llamada",
      card4: "Pagos por transferencia"
    },
    PanelBanner: {
      greetings: "Hola",
      activity: "Esta es la actividad de este mes:",
      connections: "Ingresos",
      payments: "Pagos registrados",
      calls: "Solicitudes de llamadas"
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
