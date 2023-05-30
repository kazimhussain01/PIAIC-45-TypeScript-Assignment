/*
44. Sandwiches: Write a function that accepts a array of items a person wants 
on a sandwich. The function should have one parameter that collects as many 
items as the function call provides, and it should print a summary of the sandwich 
that is being ordered. Call the function three times, using a different number 
of arguments each time.
*/

function makeSandwich(...items){
    console.log("Make a Sandwhich with a following Items:");
    for (let item of items) {
        console.log("_" + item);
    }
    console.log("Done!");
    
}

makeSandwich("turkey", "cheddar", "lettuce");
makeSandwich("peanut butter", "jelly");
makeSandwich("bacon", "eggs", "avocado", "salsa", "sour cream");