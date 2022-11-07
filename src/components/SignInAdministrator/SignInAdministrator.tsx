import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { validLoginUser } from "utils/validations.utils";

import Styles from "./SignInAdministrator.styles";
import { SignInAdministratorProps as Props } from "./SignInAdministrator.types";

import LogoKonecta from "../../assets/images/logoKonecta.svg";

const SignInAdministrator: React.FC<Props> = props => {
  const [dniField, codeField] = validLoginUser();
  const { control, handleSubmit } = useForm();
  const t = useI18n().signIn.SignInForm;

  const renderHeader = (
    <>
      <h2 className="SignInAdministrator__title">Bienvenido</h2>
      <h3 className="SignInAdministrator__subTitle">
        ¡Hola! Sigue estos simples pasos
      </h3>
    </>
  );

  const renderForm = () => {
    return (
      <>
        <div className="SignInAdministrator__textField">
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
          <Controller
            name={codeField.name}
            control={control}
            rules={codeField.rules}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                field={field}
                fields={fieldState}
                config={{
                  type: codeField.type,
                  label: codeField.label,
                  variant: "outlined",
                  margin: "dense",
                  fullWidth: true,
                  focused: true
                }}
              />
            )}
          />
        </div>

        <Button
          variant="contained"
          // className="SignInAdministrator__button"
          onClick={handleSubmit}
        >
          Continuar
        </Button>
      </>
    );
  };

  return (
    <Styles className="SignInAdministrator">
      <div className="SignInAdministrator__container">
        <img
          src={LogoKonecta}
          alt="logoKonecta"
          className="SignInAdministrator__logo"
        />
        {renderHeader}
        {renderForm()}
        <h4 className="SignInAdministrator__footerText">
          Copyright B12 2022 - Todos los derechos reservados
        </h4>
      </div>
    </Styles>
  );
};

SignInAdministrator.defaultProps = {};

export default SignInAdministrator;
