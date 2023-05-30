/*
23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results
 of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

//True Tests
//Test no 1
var car = "BMW";
console.log("car == 'BMW'? I Perdict True");
console.log(car == 'BMW');

//Test no 2
var car1 = "Honda Civic";
var b;
(car1 == "Honda Civic") ? b = 'true' : b = 'false';
console.log(b);

//Test no 3
var car3 = "Tayota Gli";
var c;
(car3 == "Tayota Gli") ? c = "true" : c = "false";
console.log(c);

//Test no 4
var car4 = "Parado";
console.log("car4 == parado? I predict True");
console.log(car4 == "Parado");

//Test no 5
var car5 = "Marsatize";
console.log("car5 == Marsatize? I Predict True");
console.log(car5 == "Marsatize");

//False Tests
//Test no 1
var numerb = 7;
console.log("number == 7? I Predict is True Other wise False");
console.log(numerb == 8);

//Test no 2
var number1 = 3;
console.log("number1 == 2? I Predict is False Other wise True");
console.log(number1 == 2);

//Test no 3
var number2 = 9;
console.log("number2 == 5? I predict is False Other wise True");
console.log(number2 == 5);

//Test no 4
var numerb3 = 5;
var d;
(numerb3 == 4) ? d = "True" : d = "False";
console.log(d);

//Test no 5
var numerb4 = 10;
var k;
(numerb4 == 9) ? k = "True" : k = "False";
console.log(k);
