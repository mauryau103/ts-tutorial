let lname = 'john';
//lname = 10;

//-------------------------

let fname: string;
fname = "Umesh"

let newname = fname.toUpperCase();
console.log(newname);


let age:number;

age = 25;
//age = "25"

//------------------------------------------------------------------------
function greeter(person: string) {  
    return "Hello, " + person;  
}  
let user = 'JavaTpoint';  
//console.log(greeter(user));  
//----------------------------------Number
function addNumbers(a: string, b: number) {  
    return a + b;  
}  
var sum = addNumbers("JavaTpoint", 25);  
//console.log('Sum of the numbers is: ' + sum);  

let myNum:number = 5.0;
console.log(typeof(myNum));

//------------------------------String

let myName:string = "Umesh"
let myDepartment:string = "Java Web"

// Before-ES6 
let output1:string = myName +" works in the "+myDepartment+" Department."
console.log(output1);

// After-ES6  
let output2:string = `${myName} works in the ${myDepartment} Department.`
console.log(output2);

//-------------------------------boolean

let isDone:boolean = true

console.log(isDone);

//-------------------------------void

let unusable:void=undefined;
console.log(unusable);

function helloUser():void{
    console.log("this is a welcome message")
    return
}

helloUser();
//--------------------------------null

let nullValue:null = null //only null can assign here no other values are acceptable
 
//let nullValue2:string=null --> not allowed

//-------------------------------undefined

let myundefined:undefined = undefined //only undefined allowed...it is like void

//-----------------------------------any

let fname2 = "umesh"
let age2 = "21"
let lname2:any= "maurya"
let std:any= 17

//--> -------------------------User defined data types -------------------------

//*Array*

var list:number[] =[1,3,5]
var list2 =[1,2,3,"umesh"]
var list3:Array<number> = [1,3,5] //known as generic array type
var strList:Array<string> = ["umesh","aashu"]
var undefinedList:undefined

console.log(list);
console.log(list2);
console.log(list3);
console.log(strList);

//*Tuple */

//desclare a tuple
let a:[string,number]

//initialize a tuple

a = ["umesh",3]

let b:["umesh",3,4,"aashu"]

//interface 

interface calc{
    subtract(first:number,second:number):any;
}

let calculator:calc={
    subtract: function (first: number, second: number) {
        return first-second;
    }
}

console.log(calculator.subtract(8,5));

//class

class Animal
{
    name: string;
    type:string;
    count: number;
    constructor(name:string,type:string,count:number)
        {
        this.name = name;
        this.type = type;
        this.count = count;
    }

    showDetails()  
    {  
        console.log(this.name + " : " + this.type);  
    }  
}










