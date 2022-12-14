import { Dictionary } from "i18n/i18n.types";

const status = "Estado";

const es: Dictionary = {
  global: {
    settings: {
      title: "Configuración de administrator",
      success: "Éxito",
      confirm: "Confirmar",
      cancel: "Desactivar",
      note: "Nota: Realizar este procedimiento una unica vez.",
      confirmed: "Se confirmó el registro de 2FA.",
      cancelled: "Se canceló el registro de 2FA.",
      done: "Configuración de 2FA realizada.",
      description:
        "Si desea conectar su cuenta con la verificación de segundo paso de Google, debe usar el siguiente código secreto o escanear el código QR, una vez hecho esto, presione el botón de confirmación para continuar o el botón de cancelar para rechazar."
    },
    sideBar: {
      start: "Inicio",
      startAdmin: "Inicio Admin",
      myPays: "Mis pagos",
      paymentDetails: "Detalles de pago",
      myPayments: "Listado de pagos",
      myClients: "Listado de clientes",
      logout: "Cerrar sesión",
      support: "Contacto",
      title: "Contacto",
      direction: "La Republica 218 - Miraflores",
      setting: "Configuración 2FA",
      phone: "0800 1652 1254",
      email: "info@b12.com",
      address: "La Republica 218 - Miraflores"
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
      TablePaymentAdmin: {
        TableHeader: {
          name: "Nombre",
          date: "Fecha de pago",
          amount: "Monto pagado",
          method: "Método de pago",
          state: "Estado",
          action: ""
        },

        Pagination: {
          legend: (begin: number, rowsPage: number, total: number) =>
            `Mostrando registros del ${begin} al ${rowsPage} de un total de ${total} registros.`,
          back: "Anterior",
          next: "Siguiente"
        }
      },
      TableClientAdmin: {
        TableHeader: {
          name: "Nombre",
          dni: "Dni",
          email: "Email",
          phone: "Celular",
          punishmentDate: "Fecha de castigo",
          action: ""
        },
        Pagination: {
          legend: (begin: number, rowsPage: number, total: number) =>
            `Mostrando clientes del ${begin} al ${rowsPage} de un total de ${total} clientes.`,
          back: "Anterior",
          next: "Siguiente"
        }
      },
      TablePaymentUser: {
        TableHeader: {
          concept: "Concepto",
          originalAmount: "Monto original",
          amountPaid: "Monto pagado",
          paymentDate: "Fecha de pago",
          actions: "Acciones",
          state: "State",
          details: ""
        },
        TableRows: {
          buttonAction: "Descargar comprobante",
          buttonDetail: "Ver detalles",
          buttonNoDetail: "Aun no se puede descargar el comprobante de pago"
        },
        TableRowsExpand: {
          entity: "Entidad bancaria:",
          typeDebt: "Tipo de deuda:",
          typeExchange: "Tipo de moneda:",
          date: "Fecha:"
        },
        Pagination: {
          legend: (begin: number, rowsPage: number, total: number) =>
            `Mostrando pagos del ${begin} al ${rowsPage} de un total de ${total} pagos.`,
          back: "Anterior",
          next: "Siguiente"
        }
      },
      TableDebtUser: {
        TableRows: {
          buttonExpand: "Ver detalles",
          amount: "Monto original",
          discount: "Monto a pagar",
          deadline: "Fecha límite de pago"
        },
        TableRowsExpand: {
          entity: "Entidad bancaria:",
          typeDebt: "Tipo de deuda:",
          typeExchange: "Tipo de moneda:",
          date: "Fecha:"
        },
        Pagination: {
          legend: (begin: number, rowsPage: number, total: number) =>
            `Mostrando deudas del ${begin} al ${rowsPage} de un total de ${total} deudas.`,
          back: "Anterior",
          next: "Siguiente"
        }
      }
    },
    ProfileSelectOverlay: {
      user: "Configuraciones de usuario",
      signOut: "Cerrar Sesión"
    },
    ModalContact: {
      title: "Contacto",
      direction: "La Republica 218 - Miraflores",
      setting: "Configuración 2FA",
      phone: "0800 1652 1254",
      email: "info@b12.com",
      address: "La Republica 218 - Miraflores"
    },
    select: "Seleccionar",
    inputSearch: "Buscar",
    progress: "Cargando...",
    selectFilter: "Filtros",
    copyright: "Copyright B12 2022 - Todos los derechos reservados"
  },
  home: {},
  pages: {
    FourZeroThree: {
      title: "Necesitas accesos",
      subtitle: "Solicita acceso o usa una cuenta que te permita acceder.",
      accessing: "Estás accediendo como"
    },
    UserPayPanel: {
      title: "Listado de clientes",
      buttonExcel: "Excel",
      buttonPdf: "PDF",
      buttonPrint: "Imprimir"
    },
    UserOperationPanel: {
      title: "Listado de pagos",
      buttonExcel: "Excel",
      buttonPdf: "PDF",
      buttonPrint: "Imprimir"
    },
    AdminPaymentDetails: {
      proof: {
        title: "Comprobante de pago",
        name: "Nombres",
        bankEntity: "Entidad bancaria",
        debtType: "Tipo de deuda",
        currencyType: "Tipo de moneda",
        paymentMethod: "Método de pago",
        date: "Fecha",
        hour: "Hora",
        paymentcode: "Codigo de pago",
        originalAmount: "Monto original",
        discount: "Descuento",
        subtotal: "Subtotal",
        amountPaid: "Monto pagado",
        buttons: {
          pdf: "Descargar PDF",
          email: "Enviar por correo",
          back: "Regresar"
        }
      },
      card: {
        title: "¡Gracias por realizar su pago!",
        subtitle: "Ahora podrá disfrutar de muchos beneficios",
        alt: "Foto de usuario"
      }
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
      subtitle: "Necesitamos identificarte para poder continuar",
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
      ul4: "Créditos vehiculares",
      image: "Imagen"
    },
    SignInValidation: {
      greeting: "Bienvenido",
      instructions: "Por favor elige un metodo de verificación:",
      button: "Continuar",
      fields: {
        labelPhone: "Enviar un código SMS al número:",
        labelEmail: "Enviar un código al correo:"
      }
    },
    SignInFormCode: {
      question: "No recibió ningun código?",
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
      card3: "Pagos pendientes",
      card4: "Pagos por transferencia",
      errorText: "Error al subir el archivo",
      import: "Importar CSV",
      done: "Hecho",
      doneText: "Archivo cargado con éxito.",
      uploadClients: "Subir nuevos clientes",
      uploadDescription:
        "EL documento debe subirse en el mismo formato y orden para poder procesarlo correctamente.",
      downloadTemplate: "Descargar plantilla"
    },
    PanelBanner: {
      greetings: "Hola",
      activity: "Esta es la actividad de este mes:",
      connections: "Ingresos",
      payments: "Pagos registrados",
      calls: "Solicitudes de llamadas"
    },

    PanelBannerClient: {
      title: "CONOCE LAS PROMOCIONES QUE TENEMOS PARA TI:",
      paragraph1: "-Reducción de hasta el 70% de la deuda",
      paragraph2: "-Campañas para nuevos crédito",
      paragraph3: "-Nivelación en las centrales de riesgo"
    },

    CardImageOne: {
      title: "Vive la vida libre de deudas",
      subtitle: "Vivir tranquilo no tiene precio"
    },

    CardImageTwo: {
      subtitle1: "“pagar mi deuda fue alcanzar la",
      subtitle2: "libertad financiera, y esa libertad",
      subtitle3: "me ayudó a alcanzar mis sueños”"
    },

    IndicatorsClientOne: {
      greetings: "Bienvenido(a)"
    },
    IndicatorsClientTwo: {
      debt: "Deuda Actual"
    },
    Summary: {
      title:
        "Aquí brindamos el monto de tu deuda y las fechas límite para hacer tus pagos:"
    },
    InformationClient: {
      title: "Pago con tarjeta",
      subtitle: "Aceptamos los siguientes métodos de pago:",
      subtitle2: "También puedes pagar con tus tarjetas de débito",
      title2: "Transferencia bancaria",
      subtitle3: "BANCO",
      subtitle4: "Cuenta corriente soles",
      subtitle5: "Cuenta interbancaria soles",
      paragraph:
        "Después de realizar el depósito, envíanos el voucher al número 900 415 521 oal correo atencion@b12.pe, indicando el número de operación.",
      subtitle6: "Genera tu número de operación para realizar el pago",
      button: "Pagar",
      button2: "Generar número de operación"
    },
    PaymentRejected: {
      button: "Volver a intentar",
      title: "Detalles del pago",
      paragraph1: "Monto Pagado: ",
      paragraph2: "Fecha: ",
      paragraph3: "Hora: ",
      paragraph4: "Monto Pagado: ",
      success: "Pago Exitoso",
      approved: "Se ha aprobado su pago con éxito",
      rejected: "Pago Rechazado",
      disapproved: "No se pudo procesar el pago"
    },

    ClientContainer: {
      title:
        "Aquí brindamos el monto de tu deuda y las fechas límite para hacer tus pagos:",
      copyright: "Copyright B12 2022 - Todos los derechos reservados",
      image: "Imagen"
    },
    OperationNumberModal: {
      operation: "Su numero de operación es",
      current: "Cuenta corriente soles",
      interbank: "Cuenta interbancaria soles",
      amount: "Monto a pagar",
      offer: "Oferta disponible hasta el",
      copy: "Copiar",
      paragraph:
        "Acérquese a la agencia mas cercana y realice el deposito indicando el numero de operación, también puede realizar transferencias interbancarias desde la App de su preferencia."
    }
  },
  components: {
    UserDetails: {
      titleDetails: "Detalles del cliente",
      paragraphDetails: "Seleccione un cliente para ver los detalles",
      alt: "Detalle de pago",
      name: "Nombres:",
      lastName: "Apellidos:",
      documentType: "Tipo de documento:",
      documentNumber: "Número documento:",
      birthDate: "Fecha de nacimiento:",
      gender: "Género:",
      district: "Distrito:",
      address: "Dirección:",
      email: "Email:",
      phone: "Teléfono:",
      mobile: "Celular:"
    },
    OperationalDetails: {
      titleDetails: "Detalles del pago",
      paragraphDetails: "Seleccione un pago para ver los detalles",
      alt: "Detalle de pago",
      customerName: "Nombre del cliente:",
      amountPaid: "Monto pagado: ",
      date: "Fecha: ",
      hour: "Hora: ",
      paymentMedium: "Medio de pago:",
      paymentStatus: "Estado del pago",
      button: "Ver comprobante de pago",
      buttonNoDetail: "Aun no se puede descargar el comprobante de pago",
      invalide: "Invalidar",
      validate: "Validar"
    },
    FooterResponsive: {
      myPayments: "Mis pagos",
      contact: "Contacto",
      paymentIcon: "Icono de pago",
      homeIcon: "Icono de inicio",
      contactIcon: "Icono de contacto"
    },
    CardDebts: {
      buttonExpand: "Ver detalles",
      amount: "Monto original",
      discount: "Monto a pagar",
      deadline: "Fecha límite de pago",
      button: "Pagar",
      button2: "Generar número de operación",
      buttonPayment: "Pagado"
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
