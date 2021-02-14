interface Employees {
    name: string;
    age?: number;
}

function printName(emp: Employees) {
    console.log(emp.name);
}

printName({ name: "Maria" });
