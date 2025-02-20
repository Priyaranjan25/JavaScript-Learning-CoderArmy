// comparison oprator

let a1 =1;
let a2 =2;
console.log(a1==a2);
console.log(a1>=a2);
console.log(a1<=a2);

let num = 10;
let str ="10";
console.log(num==str); //the js convert the string into number(type conversion), so true

// type check ===
console.log(a1===str);  //give false as it first check type then value
console.log(num===str); 

// null == undefined  give true
//null=== undefined   give false

//null can only be equivalent to undefined.
console.log(null==0);
console.log(null<0);
console.log(null>0);
console.log(null<=0);
console.log(null>=0);

//compare with undefined
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);

console.log(NaN==NaN)





