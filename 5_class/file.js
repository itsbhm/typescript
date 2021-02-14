var Employee = /** @class */ (function () {
    function Employee() {
        this.saying = Employee.workzone;
    }
    Employee.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    Employee.workzone = "Delhi";
    return Employee;
}());
var emp = new Employee();
emp.saying = "This is text";
//console.log(Employee.workzone);
emp.hello("Ankit");
