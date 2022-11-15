import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js";
import { BarElement, Title, Tooltip, Legend } from "chart.js";
import useGlobals from "contexts/globals/globals.hooks";
import dayjs from "dayjs";
import React from "react";
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
  const year = dayjs(new Date()).format("YYYY");
  const { setIsLoading } = useGlobals();
  const { data, isLoading } = useFetchAdministratorGraphics(year);
  const { months } = data ?? {};
  const formattedData = months?.map(month => Object?.values(month)[0]);
  setIsLoading(isLoading);

  if (!formattedData) return null;

  const displayData = {
    labels,
    datasets: [
      {
        data: formattedData,
        backgroundColor: palette.primary
      }
    ]
  };

  return (
    <Styles className="BarChart">
      <Bar options={options} data={displayData} className="BarChart__chart" />
    </Styles>
  );
};

BarChart.defaultProps = {};

export default BarChart;
