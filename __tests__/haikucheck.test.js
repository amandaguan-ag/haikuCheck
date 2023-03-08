import HaikuChecker from "./../src/js/haikuCheck.js";

describe("HaikuChecker", () => {
  describe("constructor", () => {
    test("should correctly create a Haiku object with three lines", function () {
      let haikuCheck = new HaikuChecker(
        "This is line one",
        "This is line two",
        "This is line three"
      );
      expect(haikuCheck.line1).toEqual("This is line one");
      expect(haikuCheck.line2).toEqual("This is line two");
      expect(haikuCheck.line3).toEqual("This is line three");
    });
  });

  describe("checkLines", () => {
    test("should correctly check the number of line breaks", function () {});
    let haikuCheck = new HaikuChecker(
        "This is line one",
        "This is line two",
        "This is line three"
      );
      expect(haikuCheck.checkLines()).toEqual(true);
  });
});
