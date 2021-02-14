class Person {
    name: String;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(this.name + " is dancing");
    }

}

var mini = new Person("Mini");
mini.dance();

class AwesomePerson extends Person {
    dance() {
        console.log("SO AWESOME!");
        super.dance();
    }
}

var switty = new AwesomePerson("Switty");
switty.dance();