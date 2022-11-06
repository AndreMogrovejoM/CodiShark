import Button from "components/globals/Button/Button";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";

import Styles from "./SignInCode.styles";
import { SignInCodeProps as Props } from "./SignInCode.types";

const code = 123456;

const SignInCode: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInFormCode;

  const [OTP, setOTP] = useState("");

  const handleChange = (otp: any) => setOTP(otp);

  const renderSpan = () => (
    <span className="SignInCode__container--separator" />
  );

  return (
    <Styles className={`SignInCode`}>
      <OtpInput
        value={OTP}
        onChange={handleChange}
        numInputs={6}
        separator={renderSpan()}
        containerStyle="SignInCode__container--OTP"
        inputStyle="SignInCode__input SignInCode__input--text"
        focusStyle="SignInCode__input--focus"
      />
      <div className="SignInCode__container--button">
        <Button
          variant="contained"
          size="large"
          color="info"
          fullWidth
          onClick={() => console.log(OTP)}
        >
          {t.button}
        </Button>
      </div>
      <div className="SignInCode__container--text">
        <p className="SignInCode__text">
          {t.question}
          <span className="SignInCode__text--color">{t.answer}</span>
        </p>
        <p className="SignInCode__text"> {t.method}</p>
      </div>
    </Styles>
  );
};

SignInCode.defaultProps = {};

export default SignInCode;
