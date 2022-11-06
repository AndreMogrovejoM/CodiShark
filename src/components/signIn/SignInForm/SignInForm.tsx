import { Box, Grid } from "@mui/material";
import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { Controller, useForm, FieldValues } from "react-hook-form";
import { validLoginUser } from "utils/validations.utils";

import Styles from "./SignInForm.styles";
import { SignInFormProps as Props } from "./SignInForm.types";

// TODO: Uncomment when functionality is ready
/* const { ENTRY_PATH } = CONSTANTS.ROUTES; */

const SignInForm: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInFormUser;
  const [dniField, codeField, dateField] = validLoginUser();
  const [loading, setLoading] = useState(false);

  // TODO: Uncomment when functionality is ready
  /* const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); */

  const { control, handleSubmit } = useForm();

  // TODO: Uncomment when functionality is ready
  /* const submitHandler = async (values: SignInFormValues) => {
    const { email, password } = values;
    try {
      setIsLoading(true);
      console.log(email, password);
      await auth().signInWithEmailAndPassword(email, password);
      setIsLoading(false);
      navigate(ENTRY_PATH);
    } catch (e: any) {
      setIsLoading(false);
      setError(e.message);
    }
  }; */

  const handleForm = (values: FieldValues) => {
    setLoading(!loading);
  };

  return (
    <Styles className="SignInForm">
      <Box component="form" noValidate onSubmit={handleSubmit(handleForm)}>
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
                    focused: true
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
                    focused: true
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
            disabled={loading}
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
