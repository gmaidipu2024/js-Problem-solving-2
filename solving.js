//1.Answer:

function tochange(celsius) { 

  let fahrenheit = celsius * 9 / 5 + 32; 
  return fahrenheit + " F ";
} 
console.log(tochange(30));
console.log(tochange(25));


// 2. Answer:

function evenoddfinder(n) {

  return  n % 2 ? " The Nummber is Odd": " The Number is Even";
}
console.log(evenoddfinder(4));
console.log(evenoddfinder(5));


// 3. Answer:

function sum(a, b) {
  return + a+b;
  
}
console.log( "The sum number is:" + sum(70,7));
console.log( "The sum number is:" + sum( 7,7));


//4. Answer:

let numbers1 = [3,5,6,7,8,];
let numbers2 = [-1, -5, 0, 10];

function findSmallestNum(arr) {

  return Math.min(...arr);
}

console.log(findSmallestNum(numbers1)) ;
console.log(findSmallestNum(numbers2)) ;


// 6. Answer:

let numbers11 = [3,5,6,7,8,];
let allfabet = ["a", "b", "c"];

function getFirstElement(arr) {
  return arr;
}
console.log(getFirstElement(numbers11)[2]);

console.log(getFirstElement(allfabet)[2]);

// 7. Answer:

let arry=[];
let arry3 =[1,3,4];

function isArrayEmpty(arry) {
  
  return arry.length == 0;
}
console.log(isArrayEmpty(arry));
console.log(isArrayEmpty(arry3));


// 9.Answer:

let name11 ="HELLO WORLD";
let name22 ="JAVASCRIPT";

function reverseString(str) {
  return str.split('').reverse('');
}

console.log(reverseString(name11));
console.log(reverseString(name22));


// 10.Answer:

let name1 ="HELLO WORLD";
let name2 ="JAVASCRIPT";

function toLowercase(str) {
  return str.toLowerCase();
}

console.log(toLowercase(name1));
console.log(toLowercase(name2));


// 11.Answer:

let say = "hello";
let the = " hello world";

function stringLength(str) {
  return str.length ;
}
console.log(stringLength(say));
console.log(stringLength(the));



// 12.Answer:

let arr1 = [1,2,3,5,6,7];
let arr2 = [8,9,10];
let concatarr= arr1.concat(arr2);

function mergeArrays(concatarr) {
  return concatarr;
}

console.log(mergeArrays(concatarr));



// 13.Answer:

let arr13= [1,2,3,5,6,7];
let arr23 = ["a", "b","c","d"]

function getLastElement(arr) {
  return arr;
}

console.log(getLastElement(arr13[5]));
console.log(getLastElement(arr23[3]));


// 14.Answer:

let a = "hello";
let b = "world";

function getFirstCharacter(str) {
  return a;
}

console.log(a.charAt(0));
console.log(b.charAt(0));


// 15.Answer:

function sumarry(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}

let num1 =[1,2,3,4,5];
let sumall=sumarry(num1);
console.log(sumall);

