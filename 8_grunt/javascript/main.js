var Helper;
(function (Helper) {
    var Language = (function () {
        function Language() {
        }
        Language.Greeting = "Hola";
        return Language;
    }());
    Helper.Language = Language;
})(Helper || (Helper = {}));
console.log(Helper.Language.Greeting + " World");
//# sourceMappingURL=main.js.map