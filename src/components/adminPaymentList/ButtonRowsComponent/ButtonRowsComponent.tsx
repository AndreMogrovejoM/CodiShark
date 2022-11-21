import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import getI18n from "i18n/i18n.helpers";
import React, { useState } from "react";

import Styles from "./ButtonRowsComponent.styles";
import { ButtonRowsComponentProps as Props } from "./ButtonRowsComponent.types";

// TODO: Pending get data payment
const ButtonRowsComponent: React.FC<Props> = props => {
  const { icon = false } = props;
  const [open, setOpen] = useState(false);
  const t = getI18n().global.table.TablePaymentAdmin.TableRows;

  const handleExpandRow = () => {
    setOpen(!open);
  };

  const renderIcon = () => (open ? <RemoveIcon /> : <AddIcon />);

  const renderContent = () => (
    <>
      {icon && (
        <div className="PaymentTable__container--icon">{renderIcon()}</div>
      )}
      {icon
        ? t.buttonDetail.toLocaleUpperCase()
        : t.buttonAction.toLocaleUpperCase()}
    </>
  );

  const styleClass = (value: boolean) =>
    `PaymentTable__container--button ${
      value ? "PaymentTable__container--button-icon" : ""
    }`;

  return (
    <Styles
      className={`${styleClass(icon)}`}
      onClick={handleExpandRow}
      {...props}
    >
      {renderContent()}
    </Styles>
  );
};

ButtonRowsComponent.defaultProps = {};

export default ButtonRowsComponent;
