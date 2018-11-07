/**
 * Get 1 day in milliseconds
 */
export const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

/**
 * ERRORS - User input errors
 */
export const ERRORS = {
  /**
   * No string input was given
   */
  MISSING_INPUT: "Invalid Input",
  /**
   * No 2 difference date inputs were given
   */
  INVALID_INPUT_FORMAT: "Invalid Input Format",
  /**
   * Not all 3 date parts "DD MM YYYY" formats were given for a date
   */
  MISSING_DATE_PARTS: "Missing Date Parts",
  /**
   * The different date parts were not in a valid format of "DD MM YYYY"
   */
  INVALID_DATE_FORMAT: "Invalid Date Format Of \"DD MM YYYY\"",
};
