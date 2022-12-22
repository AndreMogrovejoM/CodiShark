import logoKonecta from "assets/images/logoKonecta.svg";
import image01 from "assets/images/sliderImage01.png";
import SwipperComponent from "components/globals/SwipperComponent/SwipperComponent";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";

import SignInCode from "../SignInCode/SignInCode";
import SignInForm from "../SignInForm/SignInForm";
import SignInValidate from "../SignInValidate/SignInValidate";
import Styles from "./SignIn.styles";
import { SignInProps as Props } from "./SignIn.types";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

const SignIn: React.FC<Props> = props => {
  const { isAnonymous, signInStep } = useAuth();
  const t = useI18n().signIn.SignInFormUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAnonymous) {
      navigate(ENTRY_PATH);
      return;
    }
  }, [isAnonymous, navigate]);

  const renderForm = () => {
    switch (signInStep) {
      case 0:
        return <SignInForm />;
      case 1:
        return <SignInValidate />;
      case 2:
        return <SignInCode />;
      default:
        return <SignInForm />;
    }
  };

  const renderCarrousel = () => (
    <Styles className="SignIn__component--swipper">
      <SwipperComponent
        slidesPerView={"auto"}
        pagination={{
          clickable: true
        }}
        autoPlay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        centeredSlides={true}
        spaceBetween={8}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            src={image01}
            alt={`${t.image} - 1`}
            className="SignIn__component--swipper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image01}
            alt={`${t.image} - 2`}
            className="SignIn__component--swipper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image01}
            alt={`${t.image} - 3`}
            className="SignIn__component--swipper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image01}
            alt={`${t.image} - 4`}
            className="SignIn__component--swipper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image01}
            alt={`${t.image} - 5`}
            className="SignIn__component--swipper-image"
          />
        </SwiperSlide>
      </SwipperComponent>
    </Styles>
  );

  const renderFormHeader = () => {
    const styleClass = () =>
      signInStep === 2 ? "SignIn__container--separate" : "";

    return (
      <>
        <img
          src={logoKonecta}
          alt={t.altLogo}
          className="SignIn__component--logo"
        />
        {renderCarrousel()}
        <h1 className="SignIn__title">
          {signInStep !== 2 ? t.title.toUpperCase() : t.titleAlt.toUpperCase()}
        </h1>
        <div className={styleClass()}>
          <p className="SignIn__subtitle">
            {signInStep !== 2 ? t.subtitle : t.subtitleAlt}
          </p>
          {signInStep === 2 && (
            <p className="SignIn__subtitle SignIn__subtitle-sepa">
              {t.subtitleAltTwo}
            </p>
          )}
        </div>
      </>
    );
  };

  const renderCopyright = () => (
    <p className="SignIn__component--copyright">{t.copyright}</p>
  );

  const renderList = () => {
    return (
      <div className="SignIn__renderList">
        <h2 className="SignIn__renderList--h2">{t.benefitTitle}</h2>
        <h1 className="SignIn__renderList--h1">{t.benefitSubTitle}</h1>
        <ul className="SignIn__renderList--ul">
          <li className="SignIn__renderList--h2">{t.ul1}</li>
          <li className="SignIn__renderList--h2">{t.ul2}</li>
          <li className="SignIn__renderList--h2">{t.ul3}</li>
          <li className="SignIn__renderList--h2">{t.ul4}</li>
        </ul>
      </div>
    );
  };

  return (
    <Styles className="SignIn" signInStep={signInStep}>
      <div className="SignIn__container--components">
        <div className="SignIn__container--image">{renderList()}</div>

        <div className="SignIn__container--form">
          <div className="SignIn__component--form-logo">
            <img src={logoKonecta} alt={t.altLogo} />
          </div>

          <div className="SignIn__component--form">
            <div className="SignIn__component--form-header">
              {renderFormHeader()}
            </div>
            <div className="SignIn__component--form-content">
              {renderForm()}
            </div>
          </div>

          <div className="SignIn__container--copyright">
            {renderCopyright()}
          </div>
        </div>
      </div>
    </Styles>
  );
};

SignIn.defaultProps = {};

export default SignIn;
