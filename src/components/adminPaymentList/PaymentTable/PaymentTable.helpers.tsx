import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import getI18n from "i18n/i18n.helpers";
import { useState } from "react";

import Styles from "./PaymentTable.styles";

export function getNumberOfPages(
  rowCount: number,
  rowsPerPage: number
): number {
  return Math.ceil(rowCount / rowsPerPage);
}

export function getArrayViews(numPages: number) {
  return Array.from({ length: numPages }, (_, i) => i + 1);
}

interface RowProps {
  content: string;
  bold?: boolean;
}

export const Row = (props: RowProps) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    `PaymentTable__container--field ${
      value ? "PaymentTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};

interface RowButtonProps {
  icon?: boolean;
}

export const RowButton = (props: RowButtonProps) => {
  // TODO: Icon is to redirect other view or open component expansible
  const { icon = false } = props;
  const [open, setOpen] = useState(false);
  const t = getI18n().global.table.TablePaymentAdmin.TableRows;

  const handleExpandRow = () => {
    setOpen(!open);
  };

  const styleClass = (value: boolean) =>
    `PaymentTable__container--button ${
      value ? "PaymentTable__container--button-icon" : ""
    }`;

  const colorClass = (value: boolean) => (value ? "secondary" : "primary");

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

  return (
    <Styles
      color={colorClass(icon)}
      className={styleClass(icon)}
      onClick={handleExpandRow}
      {...props}
    >
      {/* @ts-ignore */}
      {renderContent()}
    </Styles>
  );
};

// TODO: Pending data response from backend
export const ExpandableRowComponent: React.FC<any> = () => {
  const t = getI18n().global.table.TablePaymentAdmin.TableRowsExpand;

  const renderContent = (dataStatic: string, dataDynamic: string) => (
    <div className="PaymentTable__container__expand-text">
      <div className="PaymentTable__container__expand-static">
        <p className="PaymentTable__container--field PaymentTable__container--field-bold">
          {`${dataStatic} `}
        </p>
      </div>
      <p className="PaymentTable__container--field ">{dataDynamic}</p>
    </div>
  );

  return (
    <div className="PaymentTable__container__expand">
      {/* TODO: Pending data response from backend */}
      {renderContent(t.entity, "Banco BCP")}
      {renderContent(t.typeDebt, "Préstmo personal")}
      {renderContent(t.typeExchange, "Sol peruano")}
      {renderContent(t.date, "27-03-2022")}
    </div>
  );
};
