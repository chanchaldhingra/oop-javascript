function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log("draw");
}

Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);
    console.log("duplicate Circle");
}

// const circle = new Circle(1, 'red');

function Square(side) {
    this.side = side;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log("duplicate Square");
}

const shapes = [
    new Circle(1, 'red'),
    new Square(2)
];

for (const shape of shapes) {
    shape.duplicate();
}

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;