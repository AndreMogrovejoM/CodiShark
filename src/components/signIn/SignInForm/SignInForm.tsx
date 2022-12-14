import { Box, Grid, InputAdornment } from "@mui/material";
import iconAlert from "assets/images/iconAlertSignIn.svg";
import iconPerson from "assets/images/iconUserAdministrator.svg";
import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { Controller, useForm, FieldValues } from "react-hook-form";
import { useSignInUserStep1 } from "services/auth/auth.service.hooks";
import { RegisterUserConfig } from "services/auth/auth.service.types";
import { validLoginUser } from "utils/validations.utils";

import Styles from "./SignInForm.styles";
import { SignInFormProps as Props } from "./SignInForm.types";

const SignInForm: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInFormUser;
  const [dniField, codeField] = validLoginUser();
  const [isLoading, setIsLoading] = useState(false);
  const { setSignInStep, setUser } = useAuth();
  const { mutateAsync, reset } = useSignInUserStep1();
  const [error, setError] = useState("");

  const { control, handleSubmit } = useForm();

  const submitHandler = async (values: FieldValues) => {
    try {
      setIsLoading(true);
      setError("");
      const data: RegisterUserConfig = {
        dni: values?.dni,
        cod_verifier: values?.cod
      };
      await mutateAsync(data).then(response => setUser(response));
      reset();
      setIsLoading(false);
      setSignInStep(1);
    } catch (error) {
      if (error?.toString()?.includes("422")) {
        setError("No se encontró el usuario en el registro.");
      } else {
        setError(
          "Hubo un error en la información ingresada, por favor inténtelo de nuevo."
        );
      }
      setIsLoading(false);
    }
  };

  return (
    <Styles className="SignInForm">
      <Box component="form" noValidate onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={8}>
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
                    focused: true,
                    maxLength: dniField?.maxLength,
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <img
                            className="SignInForm__icon"
                            src={iconPerson}
                            alt="iconPerson"
                          />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
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
                    focused: true,
                    maxLength: codeField?.maxLength,
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <img
                            className="SignInForm__icon"
                            src={iconAlert}
                            alt="iconAlert"
                          />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <div className="SignInForm__container--button">
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="info"
            fullWidth
            disabled={isLoading}
            className="SignInForm__component--button"
          >
            {t.button}
          </Button>
        </div>
        {error?.length > 0 ? (
          <h3 className="SignInForm__error">{error}</h3>
        ) : null}
      </Box>
    </Styles>
  );
};

SignInForm.defaultProps = {};

export default SignInForm;
