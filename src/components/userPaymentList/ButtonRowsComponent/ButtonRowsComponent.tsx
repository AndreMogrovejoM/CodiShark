import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import getI18n from "i18n/i18n.helpers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Styles from "./ButtonRowsComponent.styles";
import { ButtonRowsComponentProps as Props } from "./ButtonRowsComponent.types";

const ButtonRowsComponent: React.FC<Props> = props => {
  const { icon = false, disabled, data } = props;
  const [open, setOpen] = useState(false);
  const t = getI18n().global.table.TablePaymentUser.TableRows;
  const navigate = useNavigate();

  const handleExpandRow = () => {
    setOpen(!open);
    if ("debt_id" in data) {
      navigate(`/userPaymentDetails/${data?.id}`);
    }
  };

  const renderIcon = () => (open ? <RemoveIcon /> : <AddIcon />);

  const renderAction = () =>
    data?.payment_status === "Pagado"
      ? t.buttonAction.toLocaleUpperCase()
      : t.buttonNoDetail.toLocaleUpperCase();

  const renderContent = () => (
    <>
      {icon && (
        <div className="UserPaymentTable__container--icon">{renderIcon()}</div>
      )}
      {icon ? t.buttonDetail.toLocaleUpperCase() : renderAction()}
    </>
  );

  const styleClass = (value: boolean) =>
    `UserPaymentTable__container--button ${
      value ? "UserPaymentTable__container--button-icon" : ""
    } ${disabled ? "UserPaymentTable__container--button-disabled" : ""}`;

  return (
    <Styles
      className={`${styleClass(icon)}`}
      disabled={disabled}
      onClick={handleExpandRow}
      {...props}
    >
      {renderContent()}
    </Styles>
  );
};

ButtonRowsComponent.defaultProps = {};

export default ButtonRowsComponent;
