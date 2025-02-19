//Non Primitive data type
//Array, object, function

//array
let arr =[10,20,30];
console.log(arr);
console.log(typeof arr);

let arr2 =[10,20,30,"Priyo"];
console.log(arr2);

//Object
let obj ={
    user_name:"Priyaranjan",
    account_number:3165497235,
    Balance:420
}
console.log(obj)

//Function
let fun =function(){
    console.log("Hello World");
}
fun();

//Type conversion

let account_balance ="10";
let num =Number(account_balance);

//Boolean convert to number
let x =true;
console.log(Number(x));

//Not a number
let account ="200xs";
console.log(Number(account));

//Null
let n =null;
console.log(Number(n));

//Undefine
let u ;
console.log(Number(u));

//convert into string
let st =25;
console.log(String(st));
console.log(typeof st);

//Operator   
console.log((((6*(3+18))/6)-9));
//Divide Multiply  Left to right
//Add sub  Left to right

//Modulos give reminder
console.log(20%3);


