var Arithmatic = /** @class */ (function () {
    function Arithmatic(no1, no2) {
        this.no1 = no1;
        this.no2 = no2;
    }
    Arithmatic.prototype.addition = function () {
        var ans = 0;
        ans = this.no1 + this.no2;
        return ans;
    };
    Arithmatic.prototype.substraction = function () {
        var ans = 0;
        ans = this.no1 - this.no2;
        return ans;
    };
    Arithmatic.prototype.multiplication = function () {
        var ans = 0;
        ans = this.no1 * this.no2;
        return ans;
    };
    Arithmatic.prototype.division = function () {
        var ans = 0;
        ans = this.no1 / this.no2;
        return ans;
    };
    return Arithmatic;
}());
var obj3 = new Arithmatic(11, 21);
var obj4 = new Arithmatic(31, 51);
console.log("addition of obj1 : " + obj3.addition());
console.log("addition of obj2 : " + obj4.addition());
console.log("substraction of obj1 : " + obj3.substraction());
console.log("substraction of obj2 : " + obj4.substraction());
console.log("multiplication of obj1 : " + obj3.multiplication());
console.log("multiplication of obj2 : " + obj4.multiplication());
console.log("division of obj1 : " + obj3.division());
console.log("division of obj2 : " + obj4.division());
