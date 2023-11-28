var circle = /** @class */ (function () {
    function circle(no1) {
        this.radius = no1;
        this.pi = 3.14;
    }
    circle.prototype.calculateArea = function () {
        var ans = 0;
        ans = this.pi * this.radius * this.radius;
        return ans;
    };
    return circle;
}());
var obj = new circle(21);
var ret = obj.calculateArea();
console.log("Area of circle is : " + ret);
var obj1 = new circle(11);
var ret = obj1.calculateArea();
console.log("Area of circle is : " + ret);
