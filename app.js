var variable = "John";
console.log(variable);
(variable = "hey"), console.log(variable);
var testString;
testString = "hello";
// testString = 5; // error
var testNumber;
testNumber = 5;
// testNumber = 'hello'; // error
var testBoolean;
testBoolean = true;
// testBoolean = 'hello'; // error
var testStringOrNumber;
testStringOrNumber = "hello";
testStringOrNumber = 34;
//Array
var namePerson = ["Harry", "Potter", "Lol"];
// namePerson.push(34)
namePerson.push("King");
var number = [34, 54, 53];
// number.push('hello')
number.push(23);
var testStringArray;
// testStringArray = [24,54544,423,6]
testStringArray = ["hello", "King"];
var testNumberArray;
// testNumberArray = [true,'hello', 'hehe','Lol']
testNumberArray = [4, 3, 5];
var testStringOrNumberArray;
testStringOrNumberArray = ["hello", "hehe", 43, 53];
testStringOrNumberArray = [3, 4, 5, 6];
//OBJECTS
var user = {
    name: "lol",
    age: 32,
    isAdmin: false,
};
user.name = "king";
// user.age = 'hehe'
user.age = 24;
var userObj;
userObj = {
    name: "Katy Pery",
    age: 32,
    isAdmin: true,
};
var userObj2;
userObj2 = {
    name: "LULU",
    age: 34,
    isAdmin: false,
    //here phone number is not mentioned because phone number is optional
};
//ANY types
var testAny; //remember that don't use type any everywhere else only use when we don't know the type of function or varible or object
testAny = "enree";
testAny = 445;
testAny = [];
testAny = {};
var testAnyArray;
testAnyArray = [2, 'hello', false];
// functions
var sayHello = function () {
    console.log('Hello', 'Welcome');
};
// sayHello = 'Hello'  //Type 'string' is not assignable to type '() => void
var funcReturnString = function () {
    console.log('Hi');
    return 'Hello'; //here we have to return string because we have mentioned that this function will return string
};
var multiplyFunc = function (num) {
    return num * 2;
};
var multiplyFunc1 = function (num) {
    return num * 2;
}; //this two multiplyFunc and multiplyFunc1 are same
var multiplyFunc3 = function (num) {
    // return num * 2 //here we have to return void because we have mentioned that this function will not return anything 
    // Do something here but don't return anything
};
var sumFunc = function (num1, num2, anotherNum) {
    return num1 + num2;
};
sumFunc(2, 3);
var userFunc = function (user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.phone);
    //this function will not return anything as no type for return is defined to the function
}; //In this function, we have to pass object which has name and age property and phone is optional and this function is too long
var userFunc1 = function (user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.phone);
    //this function will not return anything as no type for return is defined to the function
};
//this is the prototype of function which we can use anywhere
var joinSomething = function (num, str) {
    console.log(num + 'times' + str);
};
var userTheme = {
    name: 'John',
    age: 34,
    theme: 'dark'
};
var employee = {
    name: 'John',
    email: 'john@mail.com',
    age: 34,
    employeeId: 123,
    salary: 5000
};
var user1 = {
    name: 'Johnny',
    email: 'johnny@mulla.com',
    age: 34,
};
