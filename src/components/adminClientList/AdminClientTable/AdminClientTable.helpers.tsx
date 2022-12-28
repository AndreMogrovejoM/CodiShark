import rightArrow from "assets/images/rightArrow.svg";

import Styles from "./AdminClientTable.styles";
import { RowProps } from "./AdminClientTable.types";

export const Row = (props: RowProps) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    `AdminClientTable__container--field ${
      value ? "AdminClientTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};

export const RowButton = () => (
  <Styles
    className="AdminClientTable__container--button"
    data-tag="allowRowEvents"
  >
    <img
      src={rightArrow}
      className="AdminClientTable__container--button-icon"
      alt="Icon"
      data-tag="allowRowEvents"
    />
  </Styles>
);
