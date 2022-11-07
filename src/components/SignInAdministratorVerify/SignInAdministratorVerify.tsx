import { InputAdornment } from "@mui/material";
import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { validCode } from "utils/validations.utils";

import Styles from "./SignInAdministratorVerify.styles";
import { SignInAdministratorVerifyProps as Props } from "./SignInAdministratorVerify.types";

import iconVerification from "../../assets/images/iconVerification.svg";
import LogoKonecta from "../../assets/images/logoKonecta.svg";

const SignInAdministratorVerify: React.FC<Props> = props => {
  const codeField = validCode();
  const { control, handleSubmit } = useForm();
  const t = useI18n().signIn.SignInAdministrator.step2;

  const handleForm = (values: FieldValues) => {
    console.log(values);
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
        onSubmit={handleSubmit(handleForm)}
        className="SignInAdministratorVerify__form"
      >
        <Controller
          name={codeField.name}
          control={control}
          rules={codeField.rules}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              field={field}
              fields={fieldState}
              className="SignInAdministratorVerify__textField"
              config={{
                type: codeField.type,
                label: "",
                variant: "filled",
                fullWidth: true,
                focused: true,
                placeholder: t.place,
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        className="SignInAdministratorVerify__icon"
                        src={iconVerification}
                        alt="iconVerfication"
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
          className="SignInAdministratorVerify__button"
          disabled={false}
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
