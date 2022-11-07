import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { validLoginUser } from "utils/validations.utils";

import Styles from "./SignInAdministratorVerify.styles";
import { SignInAdministratorVerifyProps as Props } from "./SignInAdministratorVerify.types";

import LogoKonecta from "../../assets/images/logoKonecta.svg";

const SignInAdministratorVerify: React.FC<Props> = props => {
  const [dniField, codeField] = validLoginUser();
  const { control, handleSubmit } = useForm();
  const t = useI18n().signIn.SignInForm;

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
      <>
        <Controller
          name={dniField.name}
          control={control}
          rules={dniField.rules}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              field={field}
              fields={fieldState}
              config={{
                type: dniField.type,
                label: dniField.label,
                variant: "outlined",
                margin: "dense",
                fullWidth: true,
                focused: true
              }}
            />
          )}
        />
        <Button
          variant="contained"
          // className="SignInAdministrator__button"
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
      </>
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
