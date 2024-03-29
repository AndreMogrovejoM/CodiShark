// Validation utility function and data
import getI18n from "i18n/i18n.helpers";
import { PaymentStatus } from "types/payment.types";

export const validSpecialCharacters = "*.!@$%^&(){}[]:;<>,.?/~_+-=|\\";
export const fieldMinLength = 1;
export const fieldCodeLength = 6;
export const fieldDniLength = 8;
export const fieldMaxLength = 50;
export const passwordMinLength = 8;
export const minInputsCode = 6;
export const voidValue = 0;
export const paginationPerPage = 10;
export const paginationClientPerPage = 5;
export const paginationRowsPerPageOptions = [7, 14, 21, 28, 35];
export const paginationClientRowsPerPageOptions = [5, 10, 15, 20, 25];
export const userRol = 1;
export const adminRol = 10;
export const items = -3;

export const requiredField = () => {
  const t = getI18n().utils.validations;
  return {
    required: true,
    message: t.fieldRequired
  };
};

export const validEmail = () => {
  const t = getI18n().utils.validations;

  return {
    type: "email",
    message: t.validEmail,
    name: "email",
    rules: {
      required: t.fieldRequired
    }
  };
};

export const validCode = () => {
  const t = getI18n().utils.validations;

  return {
    type: "text",
    name: "code",
    message: t.minPasswordLength(fieldCodeLength),
    rules: {
      required: t.fieldRequired,
      value: fieldCodeLength,
      message: t.stringMinLength(fieldCodeLength)
    }
  };
};

export const validPassword = () => {
  const t = getI18n().utils.validations;

  return {
    type: "password",
    message: t.minPasswordLength,
    name: "password",
    rules: {
      required: t.fieldRequired,
      value: passwordMinLength,
      message: t.stringMinLength(passwordMinLength)
    }
  };
};

export const validLoginUser = () => {
  const t = getI18n().utils.validations;
  const fields = getI18n().signIn.SignInFormUser.fields;

  const dniField = {
    name: "dni",
    type: "number",
    label: fields.fieldDNI,
    maxLength: fieldDniLength,
    rules: {
      required: t.fieldRequired,
      minLength: {
        value: fieldDniLength,
        message: t.stringMinLength(fieldDniLength)
      },
      maxLength: {
        /* A constant that is used to validate the length of the password. */
        value: fieldDniLength,
        message: t.stringMaxLength(fieldDniLength)
      }
    }
  };

  const codeField = {
    name: "cod",
    type: "number",
    label: fields.fieldCode,
    maxLength: fieldMinLength,
    rules: {
      required: t.fieldRequired,
      minLength: {
        value: fieldMinLength,
        message: t.stringMinLength(fieldMinLength)
      },
      maxLength: {
        value: fieldMinLength,
        message: t.stringMaxLength(fieldMinLength)
      }
    }
  };

  const dateField = {
    name: "date_begin",
    type: "date",
    label: fields.fieldDate,
    maxLength: voidValue,
    rules: {
      required: t.fieldRequired
    }
  };

  const numberField = {
    name: "phone",
    type: "phone",
    label: "Teléfono",
    maxLength: voidValue,
    rules: {
      required: t.fieldRequired
    }
  };

  return [dniField, codeField, dateField, numberField];
};

export const validLoginUserValidation = () => {
  const t = getI18n().signIn.SignInValidation.fields;

  return [
    {
      id: "field-phone",
      name: "verifyMethod",
      value: "SMS",
      label: t.labelPhone
    },
    {
      id: "field-email",
      name: "verifyMethod",
      value: "EMAIL",
      label: t.labelEmail
    }
  ];
};

export const disabledButton = (value: PaymentStatus = "Pendiente") => {
  return value !== "Pagado";
};
