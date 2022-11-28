import UsersIcon from "assets/images/usersIcon.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./UserDetails.styles";
import { UserDetailsProps as Props } from "./UserDetails.types";

const UserDetails: React.FC<Props> = props => {
  const { id } = props;

  const t = useI18n().components.UserDetails;

  const renderDefault = () => (
    <div className="UserDetails__component--details">
      <div className="UserDetails__component--details-content">
        <img
          src={UsersIcon}
          alt={t.alt}
          className="UserDetails__container--image"
        />
        <p className="UserDetails__text--paragraph">{t.paragraphDetails}</p>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="UserDetails__component--details UserDetails__component--details-component">
      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.name}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          Armando Enrique
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.lastName}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          Guerra Flores
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.documentType}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          DNI
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.documentNumber}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          45745530
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.birthDate}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          24/09/1974
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.gender}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          Masculino
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.district}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          Los Olivos
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.address}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          Av. Mariano Pastor 157
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.email}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          armango.guerra@gmail.com
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.phone}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          245 2154
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.mobile}
        {/* TODO: Pending */}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          900 521 254
        </span>
      </p>
    </div>
  );

  return (
    <Styles className={`UserDetails`}>
      <h2 className="UserDetails__text--subtitle UserDetails__container--separate">
        {t.titleDetails}
      </h2>
      {id ? renderContent() : renderDefault()}
    </Styles>
  );
};

UserDetails.defaultProps = {};

export default UserDetails;
