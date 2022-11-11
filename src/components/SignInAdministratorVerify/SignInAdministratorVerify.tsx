import { InputAdornment } from "@mui/material";
import iconVerification from "assets/images/iconVerification.svg";
import LogoKonecta from "assets/images/logoKonecta.svg";
import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
// import useI18n from "i18n/i18n.hooks";
import { useNavigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";
import { useSignInAdminStep2 } from "services/auth/auth.service.hooks";
import { Login } from "services/auth/auth.service.types";
import { validCode } from "utils/validations.utils";

import Styles from "./SignInAdministratorVerify.styles";
import { SignInAdministratorVerifyProps as Props } from "./SignInAdministratorVerify.types";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

const SignInAdministratorVerify: React.FC<Props> = props => {
  const validationCode = validCode();
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { setSignInStep, setUser, user } = useAuth();
  const { mutateAsync, reset } = useSignInAdminStep2();
  const navigate = useNavigate();

  const t = useI18n().signIn.SignInAdministrator.step2;

  const submitHandler = async (values: FieldValues) => {
    try {
      setIsLoading(true);
      const data: Login = {
        dni: user?.dni,
        password: values?.code
      };
      await mutateAsync(data).then(user => {
        delete user["token"];
        setUser(user);
        setCookie("token", user?.token ?? "");
      });
      reset();
      setIsLoading(false);
      setSignInStep(0);
      navigate(ENTRY_PATH);
    } catch {
      setIsLoading(false);
    }
  };

  const renderHeaderVerify = (
    <>
      <h2 className="SignInAdministratorVerify__title">{t.welcome}</h2>
      <h3 className="SignInAdministratorVerify__subTitle">{t.code}</h3>
    </>
  );

  const renderFormVerify = () => {
    return (
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="SignInAdministratorVerify__form"
      >
        <Controller
          name={validationCode.name}
          control={control}
          rules={validationCode.rules}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              field={field}
              fields={fieldState}
              className="SignInAdministratorVerify__textField"
              config={{
                type: validationCode.type,
                label: "",
                variant: "filled",
                margin: "dense",
                fullWidth: true,
                focused: true,
                placeholder: t.place,
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        className="SignInAdministratorVerify__icon"
                        src={iconVerification}
                        alt="iconVerification"
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
          disabled={isLoading}
          className="SignInAdministratorVerify__button"
        >
          {t.continue}
        </Button>
      </form>
    );
  };

  return (
    <Styles className="SignInAdministratorVerify">
      <div className="SignInAdministratorVerify__container">
        <img
          src={LogoKonecta}
          alt="logoKonecta"
          className="SignInAdministratorVerify__logo"
        />
        {renderHeaderVerify}
        {renderFormVerify()}
        <h4 className="SignInAdministratorVerify__footerText">{t.copyright}</h4>
      </div>
    </Styles>
  );
};

SignInAdministratorVerify.defaultProps = {};

export default SignInAdministratorVerify;
