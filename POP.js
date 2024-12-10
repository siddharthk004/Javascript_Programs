function Addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
function substraction(no1, no2) {
    var ans = 0;
    ans = no1  - no2;
    return ans;
}
var a = 11;
var b = 21;
var ret = 0;
ret = Addition(a, b);
console.log("addition is : " + ret);
ret = substraction(a, b);
console.log("substraction is : " + ret);
