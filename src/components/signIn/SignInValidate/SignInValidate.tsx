import Button from "components/globals/Button/Button";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSignInUserStep2 } from "services/auth/auth.service.hooks";
import { validLoginUserValidation } from "utils/validations.utils";

import Styles from "./SignInValidate.styles";
import { SignInValidateProps as Props } from "./SignInValidate.types";

const name = "Roberto Flores Perez";
const phone = "938296302";
const email = "daprimovaria@gmail.com";

const SignInValidate: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInValidation;
  const fields = validLoginUserValidation();
  const [isLoading, setIsLoading] = useState(false);
  const { setSignInStep, user, setSignInMethod } = useAuth();
  const { register, handleSubmit } = useForm();
  const { mutateAsync, reset } = useSignInUserStep2();

  const submitHandler = async (values: FieldValues) => {
    try {
      setIsLoading(true);
      await mutateAsync({ dni: user?.dni, type: values?.verifyMethod });
      reset();
      setSignInMethod(values?.verifyMethod);
      setIsLoading(false);
      setSignInStep(2);
    } catch {
      setIsLoading(false);
    }
  };

  const Radio = (props: any) => {
    const { id, value, label, name, labelExtension } = props;

    return (
      <div>
        <label htmlFor={id}>
          <input
            className="SignInValidate__container__input"
            type="radio"
            value={value}
            id={id}
            {...register(name, {
              required: true
            })}
          />
          {label}
          <span className="SignInValidate__text--color">{labelExtension}</span>
        </label>
      </div>
    );
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="SignInValidate__container__form">
        {fields.map((field, index) => (
          <Radio
            key={index}
            id={field.id}
            name={field.name}
            value={field.value}
            label={field.label}
            labelExtension={
              field.value === "phone"
                ? `*** *** ${phone.slice(phone.length - 3)}`
                : `********${email.slice(email.length - 15)}`
            }
          />
        ))}
      </div>
      <div className="SignInForm__container--button">
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="info"
          fullWidth
          disabled={isLoading}
        >
          {t.button}
        </Button>
      </div>
    </form>
  );

  const renderFormHeader = () => (
    <>
      <p className="SignInValidate__text--greeting">
        {t.greeting}
        <span className="SignInValidate__text--greeting__bold">
          {` ${name}`}
        </span>
      </p>
      <p className="SignInValidate__text--indication">{t.instructions}</p>
    </>
  );

  return (
    <Styles className="SignInValidate">
      <div className="SignInValidate__container__global">
        <div className="SignInValidate__container">{renderFormHeader()}</div>
        {renderForm()}
      </div>
    </Styles>
  );
};

SignInValidate.defaultProps = {};

export default SignInValidate;
