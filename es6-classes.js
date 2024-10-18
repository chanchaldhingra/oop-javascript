
class Circle{
    constructor(radius) {
        this.radius = radius;

        this.show = function() {
            console.log("show");
        }
    }

    draw() {
        console.log("draw");
    }

    static parse(str) {
        let radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c1 = new Circle();