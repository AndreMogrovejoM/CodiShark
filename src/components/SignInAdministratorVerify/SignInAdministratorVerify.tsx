import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
// import useI18n from "i18n/i18n.hooks";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import React, { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";
import { useSignInAdminStep2 } from "services/auth/auth.service.hooks";
import { Login } from "services/auth/auth.service.types";
import { validCode } from "utils/validations.utils";

import Styles from "./SignInAdministratorVerify.styles";
import { SignInAdministratorVerifyProps as Props } from "./SignInAdministratorVerify.types";

import LogoKonecta from "../../assets/images/logoKonecta.svg";
const { ENTRY_PATH } = CONSTANTS.ROUTES;

const SignInAdministratorVerify: React.FC<Props> = props => {
  const validationCode = validCode();
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { setSignInStep, setUser, user } = useAuth();
  const { mutateAsync, reset } = useSignInAdminStep2();
  const navigate = useNavigate();

  // const t = useI18n().signIn.SignInForm;

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
      <h2 className="SignInAdministratorVerify__title">Bienvenido</h2>
      <h3 className="SignInAdministratorVerify__subTitle">
        Ingrese el código enviado a su número de celular para poder continuar:
      </h3>
    </>
  );

  const renderFormVerify = () => {
    return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <Controller
          name={validationCode.name}
          control={control}
          rules={validationCode.rules}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              field={field}
              fields={fieldState}
              config={{
                type: validationCode.type,
                label: "",
                variant: "outlined",
                margin: "dense",
                fullWidth: true,
                focused: true
              }}
            />
          )}
        />
        <Button variant="contained" type="submit" disabled={isLoading}>
          Ingresar
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
        <h4 className="SignInAdministratorVerify__footerText">
          Copyright B12 2022 - Todos los derechos reservados
        </h4>
      </div>
    </Styles>
  );
};

SignInAdministratorVerify.defaultProps = {};

export default SignInAdministratorVerify;
