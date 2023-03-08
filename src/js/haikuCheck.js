export default class HaikuChecker {
  constructor(input) {
    this.input = input;
  }

  countLines(input) {
    const lineBreaks = this.input.match(/\n/g) || [];
    const numLines = lineBreaks.length + 1;
    return numLines;
  }
//   var count = function(word) 
// {
//     word = word.toLowerCase();                                     
//     word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   
//     word = word.replace(/^y/, '');                                 
//     //return word.match(/[aeiouy]{1,2}/g).length;   
//     var syl = word.match(/[aeiouy]{1,2}/g);
//     console.log(syl);
//     if(syl)
//     {
//         //console.log(syl);
//         return syl.length;
//     }

//     // checkSyllables() {
//     //     const lines = this.input.split('\n');
//     //     const syllablesPerLine = [];
//     //     const syllableRegex = /[aeiouy]+/gi;
//     //     for (let line of lines) {
//     //       const syllables = line.match(syllableRegex);
//     //       const syllableCount = syllables ? syllables.length : 0;
//     //       syllablesPerLine.push(syllableCount);
//     //     }
//     //     return syllablesPerLine;
//     //   }
}