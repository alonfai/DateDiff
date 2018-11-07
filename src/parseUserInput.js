import { ERRORS } from "./constants";
import parseDateStr from "./parseDateStr";

/**
 * parse the user string input into 2 different date objects
 */
export default function parseUserInput(userInput) {
  // No user input was provided
  if (!userInput) {
    throw new Error(ERRORS.MISSING_INPUT);
  }
  const arr = userInput.toString().split(",");
  // If given array isn't seperated by the ',' comma, or length isn't exactly 2 items or one of the items is an empty string => throw an exception
  if (!arr || arr.length !== 2 || arr.findIndex(item => !item) !== -1) {
    throw new Error(ERRORS.INVALID_INPUT_FORMAT);
  }

  const firstDate = parseDateStr(arr[0].trim());
  const secondDate = parseDateStr(arr[1].trim());

  return [firstDate, secondDate];
}
