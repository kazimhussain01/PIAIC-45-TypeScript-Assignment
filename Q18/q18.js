/*
18. Seeing the World: Think of at least five places in the world you’d like to visit.
*/

//Store the locations in a array. Make sure the array is not in alphabetical order. 
var places = ["USA", "Chine", "Japan", "Austarlia", "Germany", "Pakistan"];

// Print your array in its original order.
console.log(places);

// Print your array in alphabetical order without modifying the actual list
var places1 = ["USA", "Chine", "Japan", "Austarlia", "Germany", "Pakistan"];
places1.sort();
console.log(places1);

// Show that your array is still in its original order by printing it. 
var places2 = ["USA", "Chine", "Japan", "Austarlia", "Germany", "Pakistan"];
console.log(places2);

// Print your array in reverse alphabetical order without changing the order of the original list.
places1.reverse();
console.log(places1);

// Show that your array is still in its original order by printing it again. 
console.log(places);

// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log(places);

// Reverse the order of your list again. Print the list to show it’s back to its original order
places.reverse();
console.log(places);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
places.sort();
console.log(places);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.reverse();
console.log(places);
