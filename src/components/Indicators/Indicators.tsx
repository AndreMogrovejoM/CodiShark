import { DatePicker } from "antd";
import InfoCard from "components/InfoCard/InfoCard";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import moment from "moment";
import React, { useState } from "react";
import { useFetchAdministratorSecondPanel } from "services/administrator/administrator.service.hooks";

import Styles from "./Indicators.styles";
import { IndicatorsProps as Props } from "./Indicators.types";

const { RangePicker } = DatePicker;

const Indicators: React.FC<Props> = props => {
  const t = useI18n().signIn.Indicator;
  const todayDate = new Date();
  const previous = new Date(todayDate.getTime());
  previous.setDate(todayDate.getDate() - 30);
  const dateLast30Days = dayjs(previous);
  const defaultDates = [
    moment(dateLast30Days.format("YYYY-MM-DD")),
    moment(dayjs().format("YYYY-MM-DD"))
  ];
  const [selectedDate, setSelectedDate] = useState<string[]>([
    defaultDates[0].toString(),
    defaultDates[1].toString()
  ]);
  const { data } = useFetchAdministratorSecondPanel(
    dayjs(selectedDate[0]).format("YYYY-MM-DD"),
    dayjs(selectedDate[1]).format("YYYY-MM-DD")
  );
  const { calls, connections, payments, charges } = data ?? {};

  const renderDateRange = () => {
    return (
      <RangePicker
        onChange={(_, date) => setSelectedDate(date)}
        defaultValue={[defaultDates[0], defaultDates[1]]}
        allowClear={false}
        className="Indicators__rangePicker"
      />
    );
  };

  const renderHeaderIndicators = (
    <>
      <h3 className="Indicators__title">{t.title}</h3>
      <div className="Indicators__spanContainer">{renderDateRange()}</div>
    </>
  );

  return (
    <Styles className="Indicators">
      {renderHeaderIndicators}
      <div className="Indicators__cardsContainer">
        <InfoCard title={t.card1} value={`${connections ?? 0}`} />
        <InfoCard title={t.card2} value={`${charges ?? 0}`} />
        <InfoCard title={t.card3} value={`${calls ?? 0}`} />
        <InfoCard title={t.card4} value={`${payments ?? 0}`} />
      </div>
    </Styles>
  );
};

Indicators.defaultProps = {};

export default Indicators;
