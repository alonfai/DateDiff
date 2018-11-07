import { ONE_DAY_IN_MS, ERRORS } from "./constants";
import parseUserInput from "./parseUserInput";
import parseDateStr from "./parseDateStr";

/**
 * Date Difference class object
 */
class DateManager {
  firstDate = new Date();
  secondDate = new Date();

  constructor(userInput) {
    const datesArray = parseUserInput(userInput, parseDateStr);
    this.firstDate = datesArray[0];
    this.secondDate = datesArray[1];
  }

  /**
   * Retrieve the number of days between the given
   */
  getDateDifferenceInDays = () => {
    // Convert both dates to milliseconds
    const firstDateInMs = this.firstDate.getTime();
    const secondDateInMs = this.secondDate.getTime();

    // Calculate the difference in milliseconds
    let differenceInMs = secondDateInMs - firstDateInMs;

    if (differenceInMs < 0) { // First date occurs after the second date => reverse these
      differenceInMs = Math.abs(differenceInMs);
      const tmpDate = new Date(this.firstDate);
      this.firstDate = this.secondDate;
      this.secondDate = tmpDate;
    }    

    // Convert back to days
    return Math.round(differenceInMs / ONE_DAY_IN_MS);
  };

  convertDateToString(date) {
    if (!date) {
      throw new Error(ERRORS.MISSING_INPUT);
    }
    if (date instanceof Date === false) {
      throw new Error(ERRORS.INVALID_DATE_FORMAT);
    }
    function padding(s) {
      return s < 10 ? `0${s}` : s;
    }

    return [
      padding(date.getDate()),
      padding(date.getMonth() + 1),
      date.getFullYear()
    ].join(" ");
  }

  /**
   * Get the output result from the different date inputs
   */
  printOutput = () => {
    const diffInDays = this.getDateDifferenceInDays();
    return `${this.convertDateToString(
      this.firstDate
    )}, ${this.convertDateToString(this.secondDate)}, ${diffInDays}`;
  };
}

export default DateManager;
