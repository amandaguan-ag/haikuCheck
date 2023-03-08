export default class HaikuChecker {
  constructor(input) {
    this.input = input;
  }

  countLines(input) {
    const lineBreaks = this.input.match(/\n/g) || [];
    const numLines = lineBreaks.length + 1;
    return numLines;
  }
}
