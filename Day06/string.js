// string in js

let str1 = "Hello coder army.";
let str2 = 'Aur bhaya kya hal chal.';
let str3 = `mein toh mast hu`;
console.log(str1, str2, str3);

let price = 55;
console.log(`The price is:${price}`)

//string concatination
let s1 ="Hello";
let s2 =" World";
let s3 =s1+s2;
console.log(s1+s2);
console.log(s1.length);
console.log(s3.length);

console.log('"Hello coder army."')

let message ="Aj sunday hai.\nAj chutti ha."
console.log(message)

let special = "Priyaranjan";
console.log(special[0]);
console.log(special.charAt(2));
console.log(special.toLowerCase());

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder"));
console.log(hero.includes("Coder"));
               //0123456  
let newstring = "HeloDon";
            //  -7-6-5-4-3 -2-1 
console.log(newstring.slice(1,3));
// slice can take negative index also;
console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5));
console.log(newstring.slice(-2,4));

let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji","Money"));
console.log(str10.replaceAll("Ji","Money"));

let str11 = "Money! honey! sunny! funny";
console.log(str11.split("! "));

let str12 = " hello ji ";
console.log(str12.length);
console.log(str12.trim().length);


// New way to create string
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring);
console.log(typeof lasteststring);

