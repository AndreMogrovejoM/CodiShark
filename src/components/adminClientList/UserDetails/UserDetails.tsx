import UsersIcon from "assets/images/usersIcon.svg";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./UserDetails.styles";
import { UserDetailsProps as Props } from "./UserDetails.types";

const getGender = (value: string | undefined) =>
  value === "M" ? "Masculino" : "Femenino";

const UserDetails: React.FC<Props> = props => {
  const { data } = props;

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
    <div className="UserDetails__component--details UserDetails__component--details-component UserDetails__component--details-user">
      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.name}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {`${data?.first_name} ${data?.second_name}`}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.lastName}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {`${data?.last_name} ${data?.mother_last_name}`}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.documentType}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {data?.document_type ?? "-"}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.documentNumber}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {data?.dni ?? "-"}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.birthDate}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {dayjs(data?.birth_date).format("DD/MM/YYYY")}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.gender}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {getGender(data?.gender)}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.district}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {data?.district ?? "-"}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.address}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {data?.address ?? "-"}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.email}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {data?.email ?? "-"}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.phone}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {data?.phone_address_one ?? "-"}
        </span>
      </p>

      <p className="UserDetails__text--paragraph UserDetails__text--paragraph-blue">
        {t.mobile}
        <span className="UserDetails__text--paragraph UserDetails__text--paragraph-gray">
          {data?.phone ?? "-"}
        </span>
      </p>
    </div>
  );

  return (
    <Styles className={`UserDetails`}>
      <h2 className="UserDetails__text--subtitle UserDetails__container--separate">
        {t.titleDetails}
      </h2>
      {data ? renderContent() : renderDefault()}
    </Styles>
  );
};

UserDetails.defaultProps = {};

export default UserDetails;
