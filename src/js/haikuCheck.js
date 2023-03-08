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

  checkSyllables() {
    const lines = this.input.split("\n");
    const syllableCounts = lines.map((line) => countSyllables(line));
    return syllableCounts[0] === 5;
  }
}
function countSyllables(word) {
  // A very simple syllable counter that just counts the number of vowels in a word.
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
