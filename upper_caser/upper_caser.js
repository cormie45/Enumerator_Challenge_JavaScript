const UpperCaser = function (words) {
    this.words = words
}
UpperCaser.prototype.toUpperCase = function () {
    const toUpper = this.words.map(word => word.toUpperCase());
    return toUpper;
}

module.exports = UpperCaser;
