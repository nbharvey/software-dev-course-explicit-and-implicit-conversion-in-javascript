//Task 1:
let result = Number("5") - 2; //changed "5" to explicit conversion using Number()
console.log("The result is: " + result);

let isValid = Boolean("false"); //"false" does not mean the boolean false, it is a string and written correctly as a string, therefore it is evaluated to true
if (isValid) {                  //changed "false" === true because the if statements needs it to be a valid statement
    console.log("This is valid!");
}

let age = Number("25");
let totalAge = age + 5; //changed "25" to explicit conversion using Number()
console.log("Total Age: " + totalAge);


//Task 2:
//Implicit type conversion example 
let total = "17" - 7;//before value is "17"
console.log(total); //Output 10

let total = Number("17") - 7;//after - value is 17
console.log(total); //Output 0

//Explicit type conversion
let value = null; //before - value was null
let numberValue = Number(value);
console.log(numberValue); //Output 0