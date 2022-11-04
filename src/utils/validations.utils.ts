// Validation utility function and data
import { Rule } from "antd/lib/form";
import getI18n from "i18n/i18n.helpers";

export const validSpecialCharacters = "*.!@$%^&(){}[]:;<>,.?/~_+-=|\\";
export const fieldMinLength = 2;
export const fieldMaxLength = 50;
export const passwordMinLength = 8;

export const requiredField = (): Rule => {
  const t = getI18n().utils.validations;
  return {
    required: true,
    message: t.fieldRequired
  };
};

export const validEmail = (): Rule => {
  const t = getI18n().utils.validations;
  return {
    type: "email",
    message: t.validEmail
  };
};
