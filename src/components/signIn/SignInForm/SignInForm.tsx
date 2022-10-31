import { TextField } from "@mui/material";
import { Form, Button } from "antd";
import { ReactComponent as KFCSVG } from "assets/kfcLogo.svg";
import CONSTANTS from "config/constants";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requiredField, validEmail } from "utils/validations.utils";

import Styles from "./SignInForm.styles";
import { SignInFormProps as Props, SignInFormValues } from "./SignInForm.types";

const { ENTRY_PATH } = CONSTANTS.ROUTES;
const { Item } = Form;

const SignInForm: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInForm;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values: SignInFormValues) => {
    const { email, password } = values;
    try {
      setIsLoading(true);
      console.log(email, password);
      // await auth().signInWithEmailAndPassword(email, password);
      setIsLoading(false);
      navigate(ENTRY_PATH);
    } catch (e: any) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  return (
    <Styles className="SignInForm">
      <div className="SignInForm__top">
        <header className="SignInForm__header">
          <KFCSVG className="SignInForm__logo" width="104" height="32" />
        </header>
        <p className="SignInForm__title">{t.welcome}</p>
        <p className="text SignInForm__instructions">{t.instructions}</p>
        <Form
          name="sign-in"
          className="SignInForm__form"
          onFinish={submitHandler}
          onChange={() => setError("")}
        >
          <Item
            name="email"
            rules={[requiredField(), validEmail()]}
            validateTrigger="onBlur"
            className="SignInForm__item"
          >
            <TextField
              id="email"
              type="email"
              label="email"
              variant="outlined"
              placeholder={t.emailPlaceholder}
              className="SignInForm__textField"
            />
          </Item>
          <Item name="password" rules={[requiredField()]}>
            <TextField
              id="password"
              type="password"
              label="password"
              variant="outlined"
              placeholder={t.passwordPlaceholder}
              className="SignInForm__textField"
            />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              {t.signIn}
            </Button>
          </Item>
          {error ? <p className="text text--error">{error}</p> : null}
        </Form>
      </div>
    </Styles>
  );
};

SignInForm.defaultProps = {};

export default SignInForm;
