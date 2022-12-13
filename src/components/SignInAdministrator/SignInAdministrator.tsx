import { InputAdornment } from "@mui/material";
import iconUserAdministrator from "assets/images/iconUserAdministrator.svg";
import iconPasswordAdministrator from "assets/images/iconVerification.svg";
import logoKonecta from "assets/images/logoKonecta.svg";
import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignInAdmin } from "services/auth/auth.service.hooks";
import { Login } from "services/auth/auth.service.types";
import { validLoginUser, validPassword } from "utils/validations.utils";

import Styles from "./SignInAdministrator.styles";
import { SignInAdministratorProps as Props } from "./SignInAdministrator.types";

const { ADMIN_ENTRY_PATH } = CONSTANTS.ROUTES;

const SignInAdministrator: React.FC<Props> = props => {
  const [dniField] = validLoginUser();
  const passwordField = validPassword();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { setSignInStep, setUser } = useAuth();
  const { mutateAsync, reset } = useSignInAdmin();
  const t = useI18n().signIn.SignInAdministrator.step1;

  const submitHandler = async (values: FieldValues) => {
    try {
      setIsLoading(true);
      const data: Login = {
        dni: values?.dni,
        password: values?.password
      };
      const response = await mutateAsync(data);
      reset();
      const { status } = response ?? {};
      setIsLoading(false);
      if (status === 202 || status === 200) {
        setUser({ dni: values?.dni });
        setSignInStep(1);
      } else {
        setSignInStep(0);
        navigate(ADMIN_ENTRY_PATH);
      }
    } catch {
      setIsLoading(false);
    }
  };

  const renderHeader = (
    <>
      <h2 className="SignInAdministrator__title">{t.welcome}</h2>
      <h3 className="SignInAdministrator__subTitle">{t.greetings}</h3>
    </>
  );

  const renderForm = () => {
    return (
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="SignInAdministrator__form"
      >
        <Controller
          name={dniField.name}
          control={control}
          rules={dniField.rules}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              field={field}
              fields={fieldState}
              className="SignInAdministrator__textField"
              config={{
                type: dniField.type,
                label: "",
                variant: "filled",
                margin: "dense",
                fullWidth: true,
                focused: true,
                placeholder: t.user,
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        className="SignInAdministrator__icon"
                        src={iconUserAdministrator}
                        alt="iconUserAdministrator"
                      />
                    </InputAdornment>
                  )
                }
              }}
            />
          )}
        />

        <Controller
          name={passwordField.name}
          control={control}
          rules={passwordField.rules}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              field={field}
              fields={fieldState}
              className="SignInAdministrator__textField"
              config={{
                type: passwordField.type,
                label: "",
                variant: "filled",
                margin: "dense",
                placeholder: t.password,
                fullWidth: true,
                focused: true,
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        className="SignInAdministrator__icon"
                        src={iconPasswordAdministrator}
                        alt="iconPasswordAdministrator"
                      />
                    </InputAdornment>
                  )
                }
              }}
            />
          )}
        />

        <Button
          variant="contained"
          type="submit"
          className="SignInAdministrator__button"
          disabled={isLoading}
        >
          {t.continue}
        </Button>
      </form>
    );
  };

  return (
    <Styles className="SignInAdministrator">
      <div className="SignInAdministrator__container">
        <img
          src={logoKonecta}
          alt="logoKonecta"
          className="SignInAdministrator__logo"
          width={154}
        />
        {renderHeader}
        {renderForm()}
        <h4 className="SignInAdministrator__footerText">{t.copyright}</h4>
      </div>
    </Styles>
  );
};

SignInAdministrator.defaultProps = {};

export default SignInAdministrator;
