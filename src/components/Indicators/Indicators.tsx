import PostAddIcon from "@mui/icons-material/PostAdd";
import { DatePicker } from "antd";
import InfoCard from "components/InfoCard/InfoCard";
import Button from "components/globals/Button/Button";
import useGlobals from "contexts/globals/globals.hooks";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useImportUsersByExcel } from "services/administrator/administrator.service.hooks";
import { useFetchAdministratorSecondPanel } from "services/administrator/administrator.service.hooks";
import Swal from "sweetalert2";
import { numberWithCommas } from "utils/common.utils";

import Styles from "./Indicators.styles";
import { IndicatorsProps as Props } from "./Indicators.types";

const { RangePicker } = DatePicker;

const Indicators: React.FC<Props> = props => {
  const t = useI18n().signIn.Indicator;
  const file = useRef<any>();
  const { mutateAsync, reset, isLoading } = useImportUsersByExcel();
  const { setIsLoading } = useGlobals();
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

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  const handleOnChange = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file.current.files[0]);
      await mutateAsync(formData);
      reset();
      Swal.fire(t.done, t.doneText, "success");
    } catch (error) {
      Swal.fire("Error", t.errorText, "error");
    }
  };

  const renderDateRange = () => {
    return (
      <div className="Indicators__actionsContainer">
        <RangePicker
          onChange={(_, date) => setSelectedDate(date)}
          defaultValue={[defaultDates[0], defaultDates[1]]}
          allowClear={false}
          className="Indicators__rangePicker"
        />
        <Button
          onClick={() => document.getElementById("importExcel")?.click()}
          variant="contained"
          className="Indicators__button"
          endIcon={<PostAddIcon color="secondary" />}
          disabled={isLoading}
        >
          <h3 className="Indicators__button-text">{t.import}</h3>
        </Button>
        <input
          type="file"
          id="importExcel"
          hidden
          name="importExcel"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleOnChange}
          ref={file}
        />
      </div>
    );
  };

  const renderHeaderIndicators = (
    <div className="Indicators__header">
      <h3 className="Indicators__title">{t.title}</h3>
      <div className="Indicators__spanContainer">{renderDateRange()}</div>
    </div>
  );

  return (
    <Styles className="Indicators">
      {renderHeaderIndicators}
      <div className="Indicators__cardsContainer">
        <InfoCard title={t.card1} value={`${connections ?? 0}`} />
        <InfoCard
          title={t.card2}
          value={`S./ ${numberWithCommas(+(charges ?? 0))}`}
        />
        <InfoCard title={t.card3} value={`${calls ?? 0}`} />
        <InfoCard title={t.card4} value={`${payments ?? 0}`} />
      </div>
    </Styles>
  );
};

Indicators.defaultProps = {};

export default Indicators;
