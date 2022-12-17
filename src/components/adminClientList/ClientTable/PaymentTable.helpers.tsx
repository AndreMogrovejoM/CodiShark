import rightArrow from "assets/images/rightArrow.svg";

import Styles from "./PaymentTable.styles";
import { RowProps } from "./PaymentTable.types";

export const Row = (props: RowProps) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    `PaymentTable__container--field ${
      value ? "PaymentTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};

export const RowButton = () => (
  <Styles className="PaymentTable__container--button" data-tag="allowRowEvents">
    <img
      src={rightArrow}
      className="PaymentTable__container--button-icon"
      alt="Icon"
      data-tag="allowRowEvents"
    />
  </Styles>
);
