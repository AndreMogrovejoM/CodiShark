import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js";
import { BarElement, Title, Tooltip, Legend } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

import { data, options } from "./BarChart.helpers";
import Styles from "./BarChart.styles";
import { BarChartProps as Props } from "./BarChart.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC<Props> = props => {
  return (
    <Styles className="BarChart">
      <Bar options={options} data={data} className="BarChart__chart" />
    </Styles>
  );
};

BarChart.defaultProps = {};

export default BarChart;
