var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var circle1 = /** @class */ (function () {
    function circle1(no1) {
        this.radius = no1;
        this.pi = 3.14;
    }
    circle1.prototype.calculateArea = function () {
        var ans = 0;
        ans = this.pi * this.radius * this.radius;
        return ans;
    };
    return circle1;
}());
var circlex = /** @class */ (function (_super) {
    __extends(circlex, _super);
    function circlex(no1) {
        return _super.call(this, no1) || this;
    }
    circlex.prototype.calculatecircumference = function () {
        var ans = 0;
        ans = 2 * this.pi * this.radius;
        return ans;
    };
    return circlex;
}(circle1));
var objx = new circlex(21);
var ret = objx.calculateArea();
console.log("Area of circle is : " + ret);
var ret = objx.calculatecircumference();
console.log("circumference of circle is : " + ret);
