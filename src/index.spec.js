import DateManger from "./dateManager";

describe("SCENARIOS", () => {
  it("Valid Scenario 1 => 1 year difference", () => {
    const input = "08 01 1995, 08 01 1996";
    const dateManager = new DateManger(input);
    const output = dateManager.printOutput();

    expect(output).to.equal("08 01 1995, 08 01 1996, 365");
  });
  
  it("scenario 3 => 08 01 1995, 24 12 2005", () => {
    const input = "08 01 1995, 24 12 2005";
    const dateManager = new DateManger(input);
    const output = dateManager.printOutput();

    expect(output).to.equal("08 01 1995, 24 12 2005, 4003");
  });
});
