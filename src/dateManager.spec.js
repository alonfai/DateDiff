import DateManager from "./dateManager";
import { ERRORS } from "./constants";

describe("DateManager", () => {
  describe("getDateDifferenceInDays", () => {
    it("first and second date are same", () => {
      const dateMgr = new DateManager("08 01 1995, 08 01 1995");
      const diff = dateMgr.getDateDifferenceInDays();
      expect(diff).to.equal(0);
    });

    it("first and second date are different by 1 week", () => {
      const dateMgr = new DateManager("08 01 1995, 15 01 1995");
      const diff = dateMgr.getDateDifferenceInDays();
      expect(diff).to.equal(7);
    });

    it("first date is 4003 days before second date", () => {
      const dateMgr = new DateManager("08 01 1995, 24 12 2005");
      const diff = dateMgr.getDateDifferenceInDays();
      expect(diff).to.equal(4003);
    });

    it("first date is 1 year before the second date", () => {
      const dateMgr = new DateManager("08 01 1995, 08 01 1996");
      const diff = dateMgr.getDateDifferenceInDays();
      expect(diff).to.equal(365);
    });

    it("first date occurs after second date => reverse these", () => {
      const dateMgr = new DateManager("08 01 1996, 08 01 1995");
      const diff = dateMgr.getDateDifferenceInDays();
      expect(diff).to.equal(365);
    });
  });

  it("printOutput", () => {
    const dateMgr = new DateManager("08 01 1995, 08 01 1995");
    const spy = sinon.stub(dateMgr, "convertDateToString").returns("Val");
    const output = dateMgr.printOutput();
    expect(output).to.equal("Val, Val, 0");
    expect(spy.callCount).to.equal(2);
  });

  describe("convertDateToString", () => {
    it("missing input", () => {
      const dateMgr = new DateManager("08 01 1995, 08 01 1995");
      expect(function() {
        dateMgr.convertDateToString();
      }).to.throw(ERRORS.MISSING_INPUT);
    });
    it("invalid object", () => {
      const dateMgr = new DateManager("08 01 1995, 08 01 1995");
      expect(function() {
        dateMgr.convertDateToString("SD");
      }).to.throw(ERRORS.INVALID_DATE_FORMAT);
    });

    it("check the format returns is correct", () => {
      const dateMgr = new DateManager("08 01 1995, 08 01 1995");
      const dt = new Date();
      expect(dateMgr.convertDateToString(dt)).to.not.be.empty;
    });
  });
});
