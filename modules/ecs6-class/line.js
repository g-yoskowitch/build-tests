const Point = require('./point');

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope() {
        console.log("ssslllllllllllllllllllllpo of   ",this.point1,this.point2);
        
        if (this.point1.x == this.point2.x) {
            console.log("thrrrrrrrrrrrrow in calculatesloop");
            throw new Error("it is not possible to divide by zero")
        }
        this.slope = (this.point2.y - this.point1.y) / (this.point2.x - this.point1.x)
        console.log("slop is  :  ",this.slope);
        
    }

    calculateNOfLineFunction() {
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnn of   ",this.point1,this.point2);
        if (this.point1 == undefined || this.point2 == undefined) {
            console.log("thrrrrrrrrrrrrow in calculateNOfLineFunction");
            throw new Error('must to be two points')
        }
        this.n = this.point1.y - this.slope * this.point1.x        

    }
    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }

    getPointByX(x) {
        if (typeof (x) != "number") {
            console.log("thrrrrrrrrrrrrow in getPointByX");
            throw new Error("x must be a number");
        }
        else {
            let y = this.slope * x + this.n;
            return new Point({ x, y })
        }
    }

    getPointByY(y) {
        if (typeof (y) != "number") {
            console.log("thrrrrrrrrrrrrow in getPointByY");
            throw new Error("y must be a number");
        }
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line
