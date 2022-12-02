import { DatePicker } from "antd";
import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js";
import { BarElement, Title, Tooltip, Legend } from "chart.js";
import dayjs from "dayjs";
import moment from "moment";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useFetchAdministratorGraphics } from "services/administrator/administrator.service.hooks";
import variables from "styles/utils/variables";

import { labels, options } from "./BarChart.helpers";
import Styles from "./BarChart.styles";
import { BarChartProps as Props } from "./BarChart.types";

const { palette } = variables;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC<Props> = props => {
  const plainYear = dayjs(new Date()).format("YYYY");
  const [year, setYear] = useState(plainYear);
  const { data } = useFetchAdministratorGraphics(year);
  const { months } = data ?? {};
  const formattedData = months?.map(month => Object?.values(month)[0]);

  const displayData = {
    labels,
    datasets: [
      {
        data: formattedData,
        backgroundColor: palette.primary
      }
    ]
    // datasets: [
    //   {
    //     data: labels.map(() => genRandomNumber(0, 1000)),
    //     backgroundColor: palette.primary
    //   },
    //   {
    //     data: labels.map(() => genRandomNumber(0, 1000)),
    //     backgroundColor: palette.limeGreen
    //   }
    // ]
  };

  return (
    <>
      <DatePicker
        onChange={(_, date) => setYear(date)}
        defaultValue={moment(year)}
        allowClear={false}
        className="BarChart__datePicker"
        picker="year"
      />
      <Styles className="BarChart">
        <Bar options={options} data={displayData} className="BarChart__chart" />
      </Styles>
    </>
  );
};

BarChart.defaultProps = {};

export default BarChart;
