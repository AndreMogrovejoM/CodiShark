import Button from "components/globals/Button/Button";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";
import { useSignInUserStep2 } from "services/auth/auth.service.hooks";
import { useSignInUserStep3 } from "services/auth/auth.service.hooks";
import { minInputsCode } from "utils/validations.utils";

import Styles from "./SignInCode.styles";
import { SignInCodeProps as Props } from "./SignInCode.types";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

const SignInCode: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInFormCode;
  const [isLoading, setIsLoading] = useState(false);
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const { setSignInStep, user, setUser } = useAuth();
  const { signInMethod } = useAuth();
  const { mutateAsync: mutateStep2, reset: resetStep2 } = useSignInUserStep2();
  const { mutateAsync, reset } = useSignInUserStep3();

  const handleChange = (otp: any) => setOTP(otp);

  const handleResetCode = async () => {
    try {
      setIsLoading(true);
      mutateStep2({ dni: user?.dni, type: signInMethod });
      resetStep2();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      await mutateAsync({ password: OTP, dni: user?.dni }).then(response => {
        const { access_token, user } = response ?? {};
        setUser(user);
        setCookie("token", access_token);
      });
      reset();
      setIsLoading(false);
      setSignInStep(0);
      navigate(ENTRY_PATH);
    } catch {
      setIsLoading(false);
    }
  };

  const renderSpan = () => (
    <span className="SignInCode__container--separator" />
  );

  return (
    <Styles className={`SignInCode`}>
      <OtpInput
        value={OTP}
        onChange={handleChange}
        numInputs={minInputsCode}
        separator={renderSpan()}
        containerStyle="SignInCode__container--OTP"
        inputStyle="SignInCode__input SignInCode__input--text"
        focusStyle="SignInCode__input--focus"
      />
      <div className="SignInCode__container--time">
        {/*  TODO: Remove this when integrated time */}
        <p className="SignInCode__text SignInCode__text--time">(3:44)</p>
      </div>
      <div className="SignInCode__container--button">
        <Button
          variant="contained"
          size="large"
          color="info"
          fullWidth
          onClick={submitHandler}
          disabled={isLoading}
        >
          {t.button}
        </Button>
      </div>
      <div className="SignInCode__container--text">
        <p className="SignInCode__text">
          {t.question}
          <span onClick={handleResetCode} className="SignInCode__text--color">
            {t.answer}
          </span>
        </p>
        <p className="SignInCode__text">{t.method}</p>
      </div>
    </Styles>
  );
};

SignInCode.defaultProps = {};

export default SignInCode;
