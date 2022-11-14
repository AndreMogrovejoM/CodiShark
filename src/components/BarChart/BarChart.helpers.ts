import getI18n from "i18n/i18n.helpers";
import variables from "styles/utils/variables";
import { genRandomNumber } from "utils/common.utils";

const { palette } = variables;
const t = getI18n().chart;

export const labels = [
  t.jan.slice(0, 3),
  t.feb.slice(0, 3),
  t.mar.slice(0, 3),
  t.apr.slice(0, 3),
  t.may.slice(0, 3),
  t.jun.slice(0, 3),
  t.jul.slice(0, 3),
  t.aug.slice(0, 3),
  t.sep.slice(0, 3),
  t.oct.slice(0, 3),
  t.nov.slice(0, 3),
  t.dic.slice(0, 3)
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => genRandomNumber(0, 1000)),
      backgroundColor: palette.primary
    },
    {
      data: labels.map(() => genRandomNumber(0, 1000)),
      backgroundColor: palette.limeGreen
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      position: "top" as const,
      display: false
    },
    title: {
      display: true,
      text: t.title,
      align: "start" as const,
      padding: 24
    }
  }
};
