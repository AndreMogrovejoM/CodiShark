// Validation utility function and data
import { Rule } from "antd/lib/form";
import getI18n from "i18n/i18n.helpers";

export const validSpecialCharacters = "*.!@$%^&(){}[]:;<>,.?/~_+-=|\\";
export const fieldMinLength = 2;
export const fieldMaxLength = 50;
export const passwordMinLength = 8;
export const minInputsCode = 6;

export const requiredField = (): Rule => {
  const t = getI18n().utils.validations;
  return {
    required: true,
    message: t.fieldRequired
  };
};

/* TODO: validar Login */
export const validEmail = (): Rule => {
  const t = getI18n().utils.validations;

  return {
    type: "email",
    message: t.validEmail
  };
};

export const validLoginUser = () => {
  const t = getI18n().utils.validations;
  const fields = getI18n().signIn.SignInFormUser.fields;

  const dniField = {
    name: "dni",
    type: "number",
    label: fields.fieldDNI,
    rules: {
      required: t.fieldRequired,
      minLength: {
        value: passwordMinLength,
        message: t.stringMinLength(passwordMinLength)
      },
      maxLength: {
        value: passwordMinLength,
        message: t.stringMaxLength(passwordMinLength)
      }
    }
  };

  const codeField = {
    name: "cod",
    type: "number",
    label: fields.fieldCode,
    rules: {
      required: t.fieldRequired
    }
  };

  const dateField = {
    name: "date_begin",
    type: "date",
    label: fields.fieldDate,
    rules: {
      required: t.fieldRequired
    }
  };

  return [dniField, codeField, dateField];
};

export const validLoginUserValidation = () => {
  const t = getI18n().signIn.SignInValidation.fields;

  return [
    {
      id: "field-phone",
      name: "type-message",
      value: "phone",
      label: t.labelPhone
    },
    {
      id: "field-email",
      name: "type-message",
      value: "email",
      label: t.labelEmail
    }
  ];
};
