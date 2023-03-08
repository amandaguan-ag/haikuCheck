import HaikuChecker from "./../src/js/haikuCheck.js";

describe("HaikuChecker", () => {
  describe("constructor", () => {
    test("should correctly create a Haiku object with three lines", function () {
      const haikuChecker = new HaikuChecker("this is a test haiku");
      expect(haikuChecker.input).toEqual("this is a test haiku");
    });
  });
  describe("countLines", () => {
    it("should return the correct number of lines for a multi-line input string", () => {
      const input = "this is a test haiku";
      const haikuChecker = new HaikuChecker(input);
      expect(haikuChecker.countLines()).toEqual(1);
    });
  });
});
