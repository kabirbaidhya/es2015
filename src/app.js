class Shape {
    constructor (x, y) {
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

var s = new Shape(1, 2);
console.log(s);
s.move(5, 6);
console.log(s);
