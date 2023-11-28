function addition(arr) {
    var sum = 0;
    var counter = 0;
    for (counter = 0; counter < week.length; counter++) {
        sum = sum + week[counter];
    }
    return sum;
}
var week = [10, 20, 30, 40, 50];
var ret = 0;
ret = addition(week);
console.log("addition is: " + ret);
