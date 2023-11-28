var Student = /** @class */ (function () {
    function Student(str, M, A, C) {
        console.log("Inside constructor");
        this.Name = str;
        this.marks = M;
        this.age = A;
        this.city = C;
    }
    // not add keyword function in the class
    Student.prototype.display = function () {
        console.log("Name of student : " + this.Name);
        console.log("marks of student : " + this.marks);
        console.log("age of student : " + this.age);
        console.log("city of student : " + this.city);
    };
    return Student;
}());
var obj1 = new Student("Siddharth", 85, 23, "Ahamednagar");
var obj2 = new Student("Dnyaneshwari", 94, 26, "Pune");
obj1.display();
obj2.display();
