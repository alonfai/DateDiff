import { ERRORS } from "./constants";

/**
 * parse a given date string and return its Date object
 */
export default function parseDateStr(dateStr) {
  if (!dateStr) {
    throw new Error(ERRORS.MISSING_INPUT);
  }
  //The provided date isn't in a format template of "DD MM YYYY"
  const regEx = "^[0-3][0-9] (1[0-2]|0[1-9]) (?:[0-9][0-9])?[0-9][0-9]$";
  const match = dateStr.match(regEx); // is the format ok?
  if (!match) {
    throw new Error(ERRORS.INVALID_DATE_FORMAT);
  }

  const parts = dateStr.split(" ");

  const date = new Date(parts[2], parts[1] - 1, parts[0]);
  
  return date;
}
