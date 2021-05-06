const AnagramFinder = function (word) {
    this.word = word;
    this.sortedWord = word.toLowerCase().split('').sort().join('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => word.toLowerCase().split('').sort().join('') === this.sortedWord && word !== this.word);
}

module.exports = AnagramFinder;







    // function lowerCaseAndSort(this.word) {
    //   return this.word.toLowerCase().split(‘’).sort().join(‘’);
    // }
    // String.prototype.sortWord = lowerCaseAndSort;
    // const AnagramFinder = function (word) {
    //   this.word = word;
    //   this.sortedWord = word.sortWord();