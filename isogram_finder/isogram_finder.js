const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    let string = this.word.toLowerCase().split('');
    return string.every((letter, index) => string.indexOf(letter) === index);
}

module.exports = IsogramFinder;
