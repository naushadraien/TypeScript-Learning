let variable: string = "John";
console.log(variable);

(variable = "hey"), console.log(variable);

let testString: string;

testString = "hello";

// testString = 5; // error

let testNumber: number;

testNumber = 5;

// testNumber = 'hello'; // error

let testBoolean: boolean;

testBoolean = true;

// testBoolean = 'hello'; // error

let testStringOrNumber: string | number;

testStringOrNumber = "hello";
testStringOrNumber = 34;

//Array
let namePerson = ["Harry", "Potter", "Lol"];

// namePerson.push(34)
namePerson.push("King");

let number = [34, 54, 53];
// number.push('hello')
number.push(23);

let testStringArray: string[];
//we can also write the above array definition as 'let testStringArray: Array<string>'
// testStringArray = [24,54544,423,6]
testStringArray = ["hello", "King"];

let testNumberArray: number[];
// testNumberArray = [true,'hello', 'hehe','Lol']
testNumberArray = [4, 3, 5];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = ["hello", "hehe", 43, 53];
testStringOrNumberArray = [3, 4, 5, 6];

//OBJECTS
let user = {
  name: "lol",
  age: 32,
  isAdmin: false,
};

user.name = "king";
// user.age = 'hehe'
user.age = 24;

let userObj: {
  name: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  name: "Katy Pery",
  age: 32,
  isAdmin: true,
};

let userObj2: {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string; //here phone number is optional that is chained with optional chaining i.e ?
};

userObj2 = {
  name: "LULU",
  age: 34,
  isAdmin: false,
  //here phone number is not mentioned because phone number is optional
};

//ANY types
let testAny:any; //remember that don't use type any everywhere else only use when we don't know the type of function or varible or object
testAny = "enree";
testAny = 445;
testAny = [];
testAny = {};


let testAnyArray: any
testAnyArray = [2,'hello',false]


// functions
let sayHello = () =>{
  console.log('Hello', 'Welcome');
  
};

// sayHello = 'Hello'  //Type 'string' is not assignable to type '() => void

let funcReturnString = ():string =>{ 
  console.log('Hi');
  return 'Hello' //here we have to return string because we have mentioned that this function will return string
}

 let multiplyFunc = (num:number) =>{ //here we have to pass number because we have mentioned that this function will take number as argument  
    return num * 2
 }

 let multiplyFunc1 = (num:number):number =>{ //here we have to pass number because we have mentioned that this function will take number as argument and return number   
  return num * 2
} //this two multiplyFunc and multiplyFunc1 are same


let multiplyFunc3 = (num:number):void =>{ //here we have to pass number because we have mentioned that this function will take number as argument and return void  
  // return num * 2 //here we have to return void because we have mentioned that this function will not return anything 
  // Do something here but don't return anything
}

 let sumFunc = (num1:number, num2:number, anotherNum?:number) =>{ //here we have to pass number because we have mentioned that this function will take number as argument and return number
  return num1 + num2
 }

 sumFunc(2,3);

 let userFunc = (user:{name:string, age:number, phone?:number}) =>{
    console.log(user.name);
    console.log(user.age);
    console.log(user.phone);

    //this function will not return anything as no type for return is defined to the function

 }//In this function, we have to pass object which has name and age property and phone is optional and this function is too long

 

 //Type Aliases
 type userType = {
  name: string,
  age: number,
  phone?: number
 };

  let userFunc1 = (user:userType) =>{
    console.log(user.name);
    console.log(user.age);
    console.log(user.phone);
    //this function will not return anything as no type for return is defined to the function
  }

  type myfunc =(a:number, b:string) => void //here we have defined type of function which will take number and string as argument and return void
  //this is the prototype of function which we can use anywhere

  let joinSomething:myfunc = (num,str) =>{//here we have defined function which will take number and string as argument and return void
    console.log(num + 'times' + str);
    
  }

  type userType1 = {
    name: string,
    age: number,
    phone?: string,
    theme: 'light' | 'dark'
  } // this is a prototype of object which can be used anywhere

  const userTheme:userType1 = {//here we have defined type of object which will have name, age, phone and theme property and theme property will have only two values i.e light and dark
    name : 'John',
    age:34,
    theme: 'dark'
  }

  //Interface
  //inertface is same as type but interface is used for object and function and type is used for function and variable and array and object too but interface is used more than type in react
  interface IUser { 
    name: string,
    email: string,
    age: number
  }

  interface IEmployee extends IUser{
    employeeId: number,
    salary: number,
  }

  let employee:IEmployee = {
    name: 'John',
    email: 'john@mail.com',
    age: 34,
    employeeId: 123,
    salary: 5000
  }
  
  let user1:IUser = {
    name: 'Johnny',
    email: 'johnny@mulla.com',
    age: 34,
  }

  //Genreic Types
  interface IAuthor{
    name: string,
    id: number
  }

  interface ICategory{
    id: number,
    title: string
  }

  interface IPost{
    id: number,
    title: string,
    desc: string,
    extra: IAuthor[] | ICategory[] //here we have to use union operator because we don't know which type of data will come
  }


interface IPostBetter<T>{//here we have used generic type which will take any type of data
  id: number,
  title: string,
  desc: string,
  extra: T[] //here we have to use union operator because we don't know which type of data will come and we have used generic type which will take any type of data
}

const testMe: IPostBetter<String> ={ //here we have used generic type which will take any type of data and we have passed string as generic type which means that extra will be array of string
  id: 1,
  title: 'hello',
  desc: 'hello',
  extra: ['hello', 'hi', 'hehe']
}

interface IPostEvenBetter<T extends object> {
  id: number,
  title: string,
  desc: string,
  extra: T[] //here we have to use union operator because we don't know which type of data will come and we have used generic type which will take any type of data
}

const testMe1: IPostEvenBetter<IAuthor> = { //here we have used generic type which will take any type of data and we have passed IAuthor as generic type which means that extra will be array of IAuthor
  id: 1,
  title: 'hello',
  desc: 'hello',
  extra: [{id:1, name: 'hello'}, {id:2, name: 'hi'}]
}

const testMe2: IPostEvenBetter<ICategory> = { //here we have used generic type which will take any type of data and we have passed ICategory as generic type which means that extra will be array of ICategory
  id: 1,
  title: 'hello',
  desc: 'hello',
  extra: [{id:1, title: 'hello'}]
}