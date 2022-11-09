import { InputAdornment } from "@mui/material";
import iconUserAdministrator from "assets/images/iconUserAdministrator.svg";
import iconPasswordAdministrator from "assets/images/iconVerification.svg";
import LogoKonecta from "assets/images/logoKonecta.svg";
import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { validLoginUser, validPassword } from "utils/validations.utils";

import Styles from "./SignInAdministrator.styles";
import { SignInAdministratorProps as Props } from "./SignInAdministrator.types";

const SignInAdministrator: React.FC<Props> = props => {
  const [dniField] = validLoginUser();
  const passwordField = validPassword();
  const { control, handleSubmit } = useForm();
  const t = useI18n().signIn.SignInAdministrator.step1;

  const handleForm = (values: FieldValues) => {
    console.log(values);
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
        onSubmit={handleSubmit(handleForm)}
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
          disabled={false}
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
          src={LogoKonecta}
          alt="logoKonecta"
          className="SignInAdministrator__logo"
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
