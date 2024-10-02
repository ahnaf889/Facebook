/** @format */

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var namePattern = /^[a-zA-Z ]{3,20}$/;
const passwordPattern =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export function ValidateEmail(email) {
  return emailPattern.test(email);
}

export function ValidateName(name) {
  return namePattern.test(name);
}

export function ValidatePassword(password) {
  return passwordPattern.test(password);
}
