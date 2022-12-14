import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useGlobals from "contexts/globals/globals.hooks";
import getI18n from "i18n/i18n.helpers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Styles from "./ButtonRowsComponent.styles";
import { ButtonRowsComponentProps as Props } from "./ButtonRowsComponent.types";

const ButtonRowsComponent: React.FC<Props> = props => {
  const { icon = false, disabled, data } = props;
  const [open, setOpen] = useState(false);
  const t = getI18n().global.table.TablePaymentAdmin.TableRows;
  const navigate = useNavigate();
  const { setOperationUserDebt } = useGlobals();

  const handleExpandRow = () => {
    setOpen(!open);
    console.log(data);
    if ("debt_id" in data) {
      navigate(`/userPaymentDetails/${data?.debt_id}`);
      setOperationUserDebt(data);
    }
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
    } ${disabled ? "PaymentTable__container--button-disabled" : ""}`;

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
