import { ERRORS } from "./constants";
import parseUserInput from "./parseUserInput";

describe("parseUserInput", () => {
  it("missing input", () => {
    expect(function() {
      parseUserInput(undefined);
    }).to.throw(ERRORS.MISSING_INPUT);
  });
  it("not both dates were provided", () => {
    expect(function() {
      parseUserInput("15 04 1969,");
    }).to.throw(ERRORS.INVALID_INPUT_FORMAT);
    expect(function() {
      parseUserInput(", 15 04 2000");
    }).to.throw(ERRORS.INVALID_INPUT_FORMAT);
  });

  it("check a given string returns 2 dates parsed successfully", () => {
    const datesArray = parseUserInput("15 04 1969, 15 05 1969");

    expect(datesArray.length).to.equal(2);
    expect(isNaN(datesArray[0])).to.equal(false);
    expect(isNaN(datesArray[1])).to.equal(false);
  });
});
