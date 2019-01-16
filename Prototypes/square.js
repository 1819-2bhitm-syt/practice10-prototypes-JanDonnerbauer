function Square(length) {
    this.length =length;

    /*this.getArea = function () {
        return this.length * this.length;
    }*/
}

Square.prototype.getArea = function () {
    return this.length * this.length;
};

Square.prototype.getCircumference = function() {
    return 4 * this.length;
};

module.exports = Square;