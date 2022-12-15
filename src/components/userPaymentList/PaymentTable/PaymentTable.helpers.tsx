import getI18n from "i18n/i18n.helpers";

import Styles from "./PaymentTable.styles";
import { RowChipProps, RowProps } from "./PaymentTable.types";

export const Row = (props: RowProps) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    `PaymentTable__container--field ${
      value ? "PaymentTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};

export const RowChip = (props: RowChipProps) => {
  const { conditional } = props;

  const t = getI18n().global.table.TablePaymentUser.TableRows;

  const styleClass = (value: boolean) =>
    `PaymentTable__container--chip ${
      value
        ? "PaymentTable__container--chip-green"
        : "PaymentTable__container--chip-yellow"
    }`;

  return (
    <Styles className={styleClass(conditional)}>
      <p className="PaymentTable__text--chip">
        {conditional ? t.pay : t.pending}
      </p>
    </Styles>
  );
};
