var isDone = false;
var x = 1;
var y = "Text";
var names = ["Mohit", "Vanya", "Nidhi"];
var mixName = ["Mohit", "Vanya", 12345];
var Emp;
(function (Emp) {
    Emp[Emp["Mini"] = 0] = "Mini";
    Emp[Emp["Switty"] = 1] = "Switty";
    Emp[Emp["Arshi"] = 2] = "Arshi";
})(Emp || (Emp = {}));
;
var wm = Emp.Arshi;
function getNames() {
    return "only string can be retuned";
}
function getRtns() {
    console.log("only string can be retuned");
}
