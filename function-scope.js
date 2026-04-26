// var is function scope
var msg='I am global variable'
function message(){
var msg= 'I am a function variable';
console.log("Inside function scope-",msg);
}
message();
console.log("I am outside the function scope",msg);
console.log('*************************************')
//let is function & block scope
function scope(){
let msg1= 'I am a let variable';
console.log("Inside function scope-",msg1);
}
scope();
console.log('*************************************')
// const is function and block scope
const msg2='I am global variable'
function messagePrint(){
const msg3= 'I am a const variable';
console.log("Inside function scope-",msg3);
}
messagePrint();
console.log("I am outside the fuction scope",msg2)

