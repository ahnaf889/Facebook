import moment from "moment";

export const getTime = () => {
  return moment().format("DD MM YYYY h:mm:ss a");
};
