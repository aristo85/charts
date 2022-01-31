import moment from "moment";

export const CustomizedAxisTick = (num) => {
  return moment(num / 1000, "X").format("ll");
};

export const formatter = (arr) => {
  return arr.map((el) => ({
    rate: el.rate,
    date: moment(el.date_time_w_tz).valueOf(),
  }));
};
