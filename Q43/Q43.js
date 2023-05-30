/*
Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and
store it in a separate array. Call show_magicians() with each array to
show that you have one array of the original names and one array with the
Great added to each magician’s name.
*/

// Define an array of magician's names
var originalMagicians = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
// Define the function to add "the Great" to each magician's name
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
// Define the function to show the magicians' names
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Make a copy of the original array of magicians
var copyMagicians = originalMagicians.slice();

// Call make_great() with the copy of the array
var greatMagicians = make_great(copyMagicians);

// Call show_magicians() with the original array of magicians
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call show_magicians() with the modified array of magicians
console.log("Great Magicians:");
show_magicians(greatMagicians);
