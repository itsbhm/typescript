class Employee {
    name: string;
    static workzone: string = "Delhi";
    saying: string;

    constructor() {
        this.saying = Employee.workzone;
    }

    hello(person: string) {
        console.log("Hello, " + person);
    }
}



var emp = new Employee();
emp.saying = "This is text";
//console.log(Employee.workzone);
emp.hello("Ankit");