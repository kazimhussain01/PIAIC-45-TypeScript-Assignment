/*
24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
try more comparisons, write more tests. Have at least one True and one False result for each of the 
following:
*/

//Tests for equality and inequality with strings
//True Result
let car = 'Audi';
console.log("car == Audi? I Predict is True");
console.log(car == 'Audi');

//False Result
let car1 = "Subaru";
console.log("car1 == Audi? I Predict is False Other wise True");
console.log(car1 == 'Audi');

//Tests no 1 using the lower case function
let car2 = 'Audi';
console.log("car2 == 'Audi'.lower()? I Predict is False Because the lower case function is applied");
console.log(car2 == 'Audi'.toLowerCase());

//Tests no 2 Using the lower case
let car3 = 'Audi';
console.log("car3 == Audi? I Predict is True");
console.log(car3 == 'Audi');

//Numerical tests 3 involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 10;
console.log("number == 10? I Predict is True");
console.log(number == 10);

//Numerical Test No 4 inequality
console.log("number == 7? I Predict is False");
console.log(number == 7);

//Numerical Test no 5 Greater than
console.log("number > 9? i Predicct is True");
console.log(number > 9);

//Numerical Test no 6 Less than
console.log("number < 8? I Predict is false");
console.log(number < 8);

//Numerical Test no 7 Greater than Equal to 
console.log("number >= 10? I Predict is True");
console.log(number >= 10);

//Numerical Test no 8 Less than Equal to
console.log("number <= 8? I Predict is False");
console.log(number <= 8);

//Test no 9 using "and" and "or" operators 
console.log("car == Audi? && number == 10? I Predict is True");
console.log(car == 'Audi' && number == 10);

//Test no 10 using "and" and "or" operators 
console.log("car == Audi? && number == 10? I Predict is False");
console.log(car != 'Audi' && number == 10)

//Test no 11 whether an item is in a array
let array = [1,2,3,4,5,6];
console.log("array in 1? I Predict is True");
console.log(1 in array)

//Test no 12 whether an item is in a array
let array1 = [1,2,3,4,5,6];
console.log("array1 in 7? I Predict is False");
console.log(7 in array1)


