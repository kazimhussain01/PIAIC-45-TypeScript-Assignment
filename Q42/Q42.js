/*
42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. Call show_magicians()
to see that the list has actually been modified.
*/

var magicians = ["James Ward Marshall", "Philip Thorner Goldstein", "James Lister Cook"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Greate" + magicians[i];
    }
}

// Define the function to show the magicians' names
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Call the make_great() function to modify the array of magicians
make_great(magicians);

// Call the show_magicians() function to display the modified list of magicians
show_magicians(magicians);
