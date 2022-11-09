import { Avatar, IconButton } from "@mui/material";
import React from "react";

import Styles from "./LastProcessCard.styles";
import { LastProcessCardProps as Props } from "./LastProcessCard.types";

const LastProcessCard: React.FC<Props> = props => {
  const { title } = props;

  const renderUser = () => {
    return (
      <div>
        <Avatar />
        <h2 className="LastProcessCard__name">Jorge Lopez</h2>
      </div>
    );
  };

  const renderDebt = () => {
    return (
      <div>
        <h3>S/. 565.00</h3>
        <IconButton />
      </div>
    );
  };

  return (
    <Styles className="LastProcessCard">
      <h1 className="LastProcessCard__title">{title}</h1>
      <div>
        <div>
          <h3 className="LastProcessCard__subtitle">Nombres del cliente</h3>
          <div className="LastProcessCard__names">
            {renderUser()}
            {renderUser()}
            {renderUser()}
            {renderUser()}
          </div>
        </div>
        <div>
          <h3 className="LastProcessCard__subtitle">Monto de deuda</h3>
          {renderDebt()}
          {renderDebt()}
          {renderDebt()}
          {renderDebt()}
        </div>
      </div>
      <h3 onClick={() => {}}>Ver todos</h3>
    </Styles>
  );
};

LastProcessCard.defaultProps = {};

export default LastProcessCard;
