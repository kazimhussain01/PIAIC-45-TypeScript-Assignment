/* 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

var moreguest = ["Kazim", "Husssain", "Zain", "AbuBakar", "Ali"];
var bigger_dinner = " has just got a Big Dining Table";
//Add one new guest to the beginning of your array
moreguest.unshift("Vj");
//Add one new guest to the middle of your array
moreguest.splice(2, 0, "Hamza");
//Use append() to add one new guest to the end of your list
moreguest.push("Hammad");
console.log(moreguest[0] + bigger_dinner);
console.log(moreguest[1] + bigger_dinner);
console.log(moreguest[2] + bigger_dinner);
console.log(moreguest[3] + bigger_dinner);
console.log(moreguest[4] + bigger_dinner);
console.log(moreguest[5] + bigger_dinner);
console.log(moreguest[6] + bigger_dinner);
console.log(moreguest[7] + bigger_dinner);
