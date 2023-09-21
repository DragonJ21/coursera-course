var message = "in global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    b();
}

function b () {
    console.log("b: message = " + message);
}


a();


var x; 
console.log(x);

if (x == undefined) {
    console.log("x is undefined");
}

x = 5;
if (x == undefined) {
    console.log("x is undefined");
}
else {
    console.log("x has been defined");
}


var string = "Hello";
string += " World"; //same as string = string + " World";
console.log(string + "!");

// math operators
console.log((5 + 4) / 3);
console.log(undefined / 5); //NaN = special symbol that is NOT A NUMBER

//equality
var x = 4, y = 4;
if (x == y) {
    console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
    console.log("x='4' is equal to y=4");
}

//strict equality
if (x === y) {
    console.log("String: x='4' is equal to y=4");
}
else {
    console.log("Strict: x='4' is NOT equal to y=4");
}


//if statements (all false)
if ( false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute");
}
else {
    console.log ("All false");
}

//if statements (all true)
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}

//best practice for {} style
function a () 
{
    return //nothing after return means JS will put semicolon after return
    {
        name: "Vivaswaan"
    };
}
function b () {
    return {
        name: "Viv"
    };
}

console.log(a());
console.log(b());


//for loop
var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(i);
    sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

//default values
function orderChickenWith(sideDish) {
    if (sideDish === undefined) {
        sideDish = "something";
    }
    // sideDish = sideDish || "something"; //same as above if statement left check false value or operator
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

//object creation
var company = new Object();
company.name = "Lecture";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.education = "Bachelors";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);
company["stock of company"] = 110;
console.log("Stock price is: " + company["stock of company"]);


//better way: OBJECT LITERAL
var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        education: "Bachelors"
    },
    stock: 110,
    "stock of company": 100
};
console.log(facebook);

//FUNCTION ARE OBJECTS
function multiply(x,y) {
    return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);


//function factory
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };

    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


//passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);



//COPY BY REFERENCE vs BY VALUE
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


//PASS BY REFERENCE
var a = {x: 7};
var b = a;
console.log(a);
console.log(b);
b.x = 5;
console.log(a);
console.log(b);



// PASS BY REFERENCE vs BY VALUE
function changePrimitive(primValue) {
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}

var value = 7;
changePrimitive(value); //primValue is equal to value
console.log("after changePrimitive, orig value");
console.log(value);



function changeObject(objValue) {
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);

    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
}

value = { x: 7};
changeObject(value);
console.log("after changeObject, orig value:");
console.log(value);


//FUNCTION CONSTRUCTORS, PROTOTYPE, and this KEYWORD

function Circle (radius) {
    this.radius = radius;
}
Circle.prototype.getArea =
    function () {
       return Math.PI * Math.pow(this.radius, 2);
    };

var myCircle = new Circle(10); //equivelant of saying new object
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);



// Object literals and "this"
var literalCircle = {
    radius: 10,

    getArea: function () {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;
        };
        increaseRadius();

        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(literalCircle.getArea());



// Arrays is a collection of data
var array = new Array();
array[0] = "Viv";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};
console.log(array);
array[2](array[0]);
console.log(array[3].course);



// Short hand array creation
var names = ["Viv", "Sanghani", "Test"];
console.log(names);

for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}




var names2 = ["Viv", "Test", "Learning"];

var myObj = {
    name: "Viv",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};
for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
    console.log("Hello " + names2[name]);
}


// Closures
function makeMultiplier (multiplier) {

    function b() {
        console.log("Multiplier is: " + multiplier);
    }
    b();
    
    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));