// Task 1
let myVar= 5;
console.log(myVar);

// Task 2
let myString = "Hello world!";
alert(myString);

// Task 3
let num1=5 , num2=10;
let userNum = Number(prompt("Enter a Number"))

console.log(num1+num2+userNum);

// Task 4
let myBoolean=true;
if(myBoolean==true){
    console.log("It's true!")
}
else{
    console.log("It's False")
}

// Task 5
let checkNum = 9 ;
if (checkNum % 2 ==0) {
    console.log("Even")
}

if (checkNum % 2 != 0) {
    console.log("Odd")
}

// Task 6
let frstString = "Hello";
let sndString = " Harry";

console.log(frstString + sndString);

// Task 7
let multiNum= num1 * num2;
console.log(multiNum);

// Task 8
let checkPass = prompt("Enter Password");
if (checkPass == "password") {
    alert("Access granted")
} else {
    alert("Access denied")
}

// Task 9
alert("Enter 3 Number")
let frstNum = Number(prompt("Enter First Number"));
let sndNum = Number(prompt("Enter Second Number"));
let thrdNum = Number(prompt("Enter Third Number"));

if (frstNum>sndNum && frstNum>thrdNum) {
    console.log(frstNum + " is the largest Number out of Three")
    
}

if (sndNum > frstNum && sndNum > thrdNum) {
    console.log(sndNum + " is the largest Number out of Three")
    
}

if (thrdNum > frstNum && thrdNum > sndNum) {
    console.log(thrdNum + " is the largest Number out of Three")
    
}

// Task 10
alert("Enter 2 String")
frstString = prompt("Enter First String");
sndString = prompt("Enter Second String");

if (frstString==sndString) {
    console.log("The strings are equal");
}

else{
    console.log("The strings are not equal");
}