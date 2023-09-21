(function (window) {
var vivGreeter = {};
vivGreeter.name = "Viv";
var greeting = "Hello ";
vivGreeter.sayHello = function () {
    console.log(greeting + vivGreeter.name);
}

window.vivGreeter = vivGreeter;

})(window);