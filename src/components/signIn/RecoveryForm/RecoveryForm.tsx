import { Box } from "@mui/material";
import Button from "components/globals/Button/Button";
import TextField from "components/globals/TextField/TextField";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { Controller, useForm, FieldValues } from "react-hook-form";
import { validLoginUser } from "utils/validations.utils";

import Styles from "./RecoveryForm.styles";
import { RecoveryFormProps as Props } from "./RecoveryForm.types";

const RecoveryForm: React.FC<Props> = props => {
  const [step, setStep] = useState(0);
  const [numberField] = validLoginUser();
  const t = useI18n().signIn.SignInFormUser;
  const isLoading = false;

  const { control, handleSubmit } = useForm();

  const submitHandler = async (values: FieldValues) => {
    console.log(values);
    setStep(2);
  };

  const renderFirstStep = () => {
    return (
      <>
        <h3 className="RecoveryForm__text--greeting__bold">
          No son tus datos actuales?
        </h3>
        <p className="RecoveryForm__text--greeting">actualiza tus datos </p>
        <span className="RecoveryForm__text--color" onClick={() => setStep(1)}>
          aquí
        </span>
      </>
    );
  };

  const renderSecondStep = () => {
    return (
      <div className="RecoveryForm__SSContainer">
        <h3 className="RecoveryForm__text--greeting">
          Comunícate con nosotros llamando al{" "}
          <span className="RecoveryForm__text--greeting__bold">XXX-XXX</span>{" "}
          para actualizar tus datos o{" "}
          <span className="RecoveryForm__text--greeting__bold">
            ingresa tu número
          </span>{" "}
          a continuación y un asesor se comunicará contigo a la brevedad:
        </h3>
        <Box component="form" noValidate onSubmit={handleSubmit(submitHandler)}>
          <Controller
            name={numberField.name}
            control={control}
            rules={numberField.rules}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                field={field}
                fields={fieldState}
                className="RecoveryForm__input"
                config={{
                  type: numberField.type,
                  label: numberField.label,
                  variant: "outlined",
                  margin: "dense",
                  fullWidth: true,
                  focused: true,
                  maxLength: numberField?.maxLength,
                  placeholder: "Ingrese su número de teléfono"
                }}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="success"
            fullWidth
            disabled={isLoading}
            className="RecoveryForm__button"
          >
            {t.button}
          </Button>
        </Box>
      </div>
    );
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return renderFirstStep();
      case 1:
        return renderSecondStep();
      default:
        return renderFirstStep();
    }
  };

  return <Styles className="RecoveryForm">{renderContent()}</Styles>;
};

RecoveryForm.defaultProps = {};

export default RecoveryForm;
