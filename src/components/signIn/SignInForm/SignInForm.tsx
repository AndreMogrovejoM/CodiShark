import { Box, Grid } from "@mui/material";
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
  const [dniField, codeField, dateField] = validLoginUser();
  const [isLoading, setIsLoading] = useState(false);
  const { setSignInStep, setUser } = useAuth();
  const { mutateAsync, reset } = useSignInUserStep1();

  const { control, handleSubmit } = useForm();

  const submitHandler = async (values: FieldValues) => {
    try {
      setIsLoading(true);
      const data: RegisterUserConfig = {
        dni: values?.dni,
        cod_verifier: values?.cod,
        emision_date: values?.date_begin
      };
      await mutateAsync(data).then(response => setUser(response));
      reset();
      setIsLoading(false);
      setSignInStep(1);
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <Styles className="SignInForm">
      <Box component="form" noValidate onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={8}>
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
                    maxLength: dniField?.maxLength
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={4} md={4}>
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
                    maxLength: codeField?.maxLength
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Controller
              name={dateField.name}
              control={control}
              rules={dateField.rules}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  field={field}
                  fields={fieldState}
                  config={{
                    type: dateField.type,
                    label: dateField.label,
                    variant: "outlined",
                    margin: "dense",
                    fullWidth: true,
                    focused: true
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Box className="SignInForm__container--button">
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
        </Box>
      </Box>
    </Styles>
  );
};

SignInForm.defaultProps = {};

export default SignInForm;
