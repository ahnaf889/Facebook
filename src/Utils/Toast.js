/** @format */

import { toast, Bounce } from "react-toastify";

/**
 * todo: SuccessToast funtion implement
 * @param {*} message
 */
export const successToast = (message, position = "top-left") => {
  toast.success(message, {
    autoClose: 5000,
    position,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

/**
 * todo: Errortoast funtion implement
 * @param {*} message
 */
export const errorToast = (message, position = "top-right") => {
  toast.error(message, {
    autoClose: 5000,
    position,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

/**
 * todo: InfoToast funtion implement
 * @param {*} message
 */
export const infoToast = (message, position = "top-right") => {
  toast.info(message, {
    autoClose: 5000,
    position,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};
