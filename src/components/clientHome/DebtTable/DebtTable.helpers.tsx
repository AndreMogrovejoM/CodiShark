import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SummaryCard from "components/SummaryCard/SummaryCard";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";

import Styles from "./DebtTable.styles";
import { ButtonExpanderProps, RowMiddleProps } from "./DebtTable.types";
import { RowProps } from "./DebtTable.types";

export const Row: React.FC<RowProps> = props => {
  const { content, isDate } = props;
  const t = useI18n().global.table.TableDebtUser.TableRows;

  const renderTitle = () => (isDate ? t.deadline : t.amount);
  const renderContent = () => (isDate ? content : `S/. ${content ?? ""}`);

  const styleClass = () =>
    isDate ? "DebtTable__text--date" : "DebtTable__text--title";

  return (
    <Styles className={`DebtTable`}>
      <SummaryCard title={renderTitle()}>
        <h3 className={styleClass()}>{renderContent()}</h3>
      </SummaryCard>
    </Styles>
  );
};

Row.defaultProps = {
  isDate: false
};

export const RowMiddle: React.FC<RowMiddleProps> = props => {
  const { price, discount } = props;
  const t = useI18n().global.table.TableDebtUser.TableRows;

  return (
    <Styles className={`DebtTable`}>
      <SummaryCard title={t.discount}>
        <div className="DebtTable__container--middle">
          <h3 className="DebtTable__text--title DebtTable__text--color">{`S/. ${
            price?.toFixed(2) ?? ""
          }`}</h3>
          <div>
            <span className="DebtTable__component--discount">{` - ${
              Math.round(discount * 100) ?? ""
            } %`}</span>
          </div>
        </div>
      </SummaryCard>
    </Styles>
  );
};

export const ButtonExpander: React.FC<ButtonExpanderProps> = props => {
  const { expand } = props;
  const t = useI18n().global.table.TableDebtUser.TableRows;

  const [open, setOpen] = useState(expand);

  const renderIcon = () => (open ? <RemoveIcon /> : <AddIcon />);

  return (
    <Styles
      className={`DebtTable__component--button`}
      data-tag="allowRowEvents"
      onClick={() => setOpen(!open)}
    >
      <div
        data-tag="allowRowEvents"
        className="DebtTable__container--button-content"
      >
        {t.buttonExpand.toLocaleUpperCase()}
        <div className="DebtTable__container--icon">{renderIcon()}</div>
      </div>
    </Styles>
  );
};

export const DividerRow = () => (
  <Styles className={`DebtTable__container--divider`} />
);
