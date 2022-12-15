import rightArrow from "assets/images/rightArrow.svg";
import useI18n from "i18n/i18n.hooks";

import Styles from "./PaymentTable.styles";
import { RowChipProps } from "./PaymentTable.types";

export const Row = (props: any) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    `PaymentTable__container--field ${
      value ? "PaymentTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};

export const RowChip = (props: RowChipProps) => {
  const { conditional } = props;

  const t = useI18n().global.table.TablePaymentUser.TableRows;

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

export const RowButton = (row: any) => {
  return (
    <Styles
      className="PaymentTable__container--button"
      data-tag="allowRowEvents"
    >
      <img
        src={rightArrow}
        className="PaymentTable__container--button-icon"
        alt="Icon"
        data-tag="allowRowEvents"
      />
    </Styles>
  );
};
