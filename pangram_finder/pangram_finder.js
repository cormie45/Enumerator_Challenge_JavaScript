const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
};

PangramFinder.prototype.isPangram = function () {
    let string = this.phrase.toLowerCase();
    return this.alphabet.every(letter => string.includes(letter));
};

module.exports = PangramFinder;