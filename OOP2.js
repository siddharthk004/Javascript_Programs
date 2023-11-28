var Arithmatic1 = /** @class */ (function () {
    function Arithmatic1(no1, no2) {
        this.no1 = no1;
        this.no2 = no2;
    }
    Arithmatic1.prototype.addition = function () {
        var ans = 0;
        ans = this.no1 + this.no2;
        return ans;
    };
    Arithmatic1.prototype.substraction = function () {
        var ans = 0;
        ans = this.no1 - this.no2;
        return ans;
    };
    Arithmatic1.prototype.multiplication = function () {
        var ans = 0;
        ans = this.no1 * this.no2;
        return ans;
    };
    Arithmatic1.prototype.division = function () {
        var ans = 0;
        ans = this.no1 / this.no2;
        return ans;
    };
    return Arithmatic1;
}());
var obj3 = new Arithmatic1(11, 21);
var obj4 = new Arithmatic1(31, 51);
console.log("addition of obj1 : " + obj3.addition());
console.log("addition of obj2 : " + obj4.addition());
console.log("substraction of obj1 : " + obj3.substraction());
console.log("substraction of obj2 : " + obj4.substraction());
console.log("multiplication of obj1 : " + obj3.multiplication());
console.log("multiplication of obj2 : " + obj4.multiplication());
console.log("division of obj1 : " + obj3.division());
console.log("division of obj2 : " + obj4.division());
