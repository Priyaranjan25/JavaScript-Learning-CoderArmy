let a =10;
let b= a;
b = 30;
console.log(b);
console.log(a);

//Primitive data type : Immutable --value cant be changed
//Non Primitive data type : Mutable  -- value can be change

let obj1 ={
    id:20,
    naming :"Priyo"
}

let obj2 =obj1;
console.log(obj1);
console.log(obj2);

obj2.id = 30;
console.log(obj1);
console.log(obj2);

const num =10;
//num =25;
console.log(num);

const obt ={
    id:10,
    balance:200
}
obt.id =25;

console.log(obt)