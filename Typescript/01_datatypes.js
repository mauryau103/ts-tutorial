var lname = 'john';
//lname = 10;
//-------------------------
var fname;
fname = "Umesh";
var newname = fname.toUpperCase();
console.log(newname);
var age;
age = 25;
//age = "25"
//------------------------------------------------------------------------
function greeter(person) {
    return "Hello, " + person;
}
var user = 'JavaTpoint';
//console.log(greeter(user));  
//----------------------------------Number
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers("JavaTpoint", 25);
//console.log('Sum of the numbers is: ' + sum);  
var myNum = 5.0;
console.log(typeof (myNum));
//------------------------------String
var myName = "Umesh";
var myDepartment = "Java Web";
// Before-ES6 
var output1 = myName + " works in the " + myDepartment + " Department.";
console.log(output1);
// After-ES6  
var output2 = "".concat(myName, " works in the ").concat(myDepartment, " Department.");
console.log(output2);
//-------------------------------boolean
var isDone = true;
console.log(isDone);
//-------------------------------void
var unusable = undefined;
console.log(unusable);
function helloUser() {
    console.log("this is a welcome message");
    return;
}
helloUser();
//--------------------------------null
var nullValue = null; //only null can assign here no other values are acceptable
//let nullValue2:string=null --> not allowed
//-------------------------------undefined
var myundefined = undefined; //only undefined allowed...it is like void
//-----------------------------------any
var fname2 = "umesh";
var age2 = "21";
var lname2 = "maurya";
var std = 17;
//--> -------------------------User defined data types -------------------------
//*Array*
var list = [1, 3, 5];
var list2 = [1, 2, 3, "umesh"];
var list3 = [1, 3, 5]; //known as generic array type
var strList = ["umesh", "aashu"];
var undefinedList;
console.log(list);
console.log(list2);
console.log(list3);
console.log(strList);
//*Tuple */
//desclare a tuple
var a;
//initialize a tuple
a = ["umesh", 3];
var b;
var calculator = {
    subtract: function (first, second) {
        return first - second;
    }
};
console.log(calculator.subtract(8, 5));
//class
var Animal = /** @class */ (function () {
    function Animal(name, type, count) {
        this.name = name;
        this.type = type;
        this.count = count;
    }
    Animal.prototype.showDetails = function () {
        console.log(this.name + " : " + this.type);
    };
    return Animal;
}());
var animal = new Animal("umesh", "dog", 2);
animal.showDetails();
//-----------------------enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c;
c = Color.Green;
console.log(c); //enum index start with 0 ...for this it is 1
//-----------------------------Functions
//named function with number as parameters type and return type  
function add(a, b) {
    return a + b;
}
//anonymous function with number as parameters type and return type  
var sum2 = function (a, y) {
    return a + y;
};
sum2(5, 6);
//------------------------------Generics
function identity(arg) {
    return arg;
}
var output3 = identity("myString");
var output4 = identity(100);
console.log(output3);
console.log(output4);
