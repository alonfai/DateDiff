import { ERRORS } from "./constants";
import parseDateStr from "./parseDateStr";

describe("parseDateStr", () => {
  it("missing input", () => {
    expect(function() {
      parseDateStr(undefined);
    }).to.throw(ERRORS.MISSING_INPUT);
  });
  it("not all date parts were provided", () => {
    expect(function() {
      parseDateStr("15 04");
    }).to.throw(ERRORS.INVALID_DATE_FORMAT);
  });

  it("date parts are not in correct format of \"DD MM YYYY\"", () => {
    expect(function() {
      parseDateStr("15 04 2");
    }).to.throw(ERRORS.INVALID_DATE_FORMAT); // the year is invalid
    expect(function() {
      parseDateStr("15 04 2x");
    }).to.throw(ERRORS.INVALID_DATE_FORMAT); // the year is invalid
    expect(function() {
      parseDateStr("15 04 210");
    }).to.throw(ERRORS.INVALID_DATE_FORMAT); // the year is invalid
    expect(function() {
      parseDateStr("15 04 21000");
    }).to.throw(ERRORS.INVALID_DATE_FORMAT); // the year is invalid
    expect(function() {
      parseDateStr("15 4 2002");
    }).to.throw(ERRORS.INVALID_DATE_FORMAT); // the month is invalid
    expect(function() {
      parseDateStr("53 04 2002");
    }).to.throw(ERRORS.INVALID_DATE_FORMAT); // the day is invalid and out of range
    expect(function() {
      parseDateStr("15 13 2002");
    }).to.throw(ERRORS.INVALID_DATE_FORMAT); // the month is invalid and out of range
  });

  it("check a given string parsed successfully as a Date object", () => {
    const date = parseDateStr("15 04 1999");
    expect(isNaN(date)).to.equal(false);
  });
});
