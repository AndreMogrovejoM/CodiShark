import getI18n from "i18n/i18n.helpers";
// import { genRandomNumber } from "utils/common.utils";

const t = getI18n().chart;

export const labels = [
  t.jan.slice(0, 3).toLocaleUpperCase(),
  t.feb.slice(0, 3).toLocaleUpperCase(),
  t.mar.slice(0, 3).toLocaleUpperCase(),
  t.apr.slice(0, 3).toLocaleUpperCase(),
  t.may.slice(0, 3).toLocaleUpperCase(),
  t.jun.slice(0, 3).toLocaleUpperCase(),
  t.jul.slice(0, 3).toLocaleUpperCase(),
  t.aug.slice(0, 3).toLocaleUpperCase(),
  t.sep.slice(0, 3).toLocaleUpperCase(),
  t.oct.slice(0, 3).toLocaleUpperCase(),
  t.nov.slice(0, 3).toLocaleUpperCase(),
  t.dic.slice(0, 3).toLocaleUpperCase()
];

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
