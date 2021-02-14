var isDone: Boolean = false;

var x: Number = 1;

var y: any = "Text";

var names: string[] = ["Mohit", "Vanya", "Nidhi"];

var mixName: any[] = ["Mohit", "Vanya", 12345];

enum Emp { Mini, Switty, Arshi };

var wm: Emp = Emp.Arshi;

function getNames(): String {
    return "only string can be retuned";
}

function getRtns(): void {
    console.log("only string can be retuned");
}