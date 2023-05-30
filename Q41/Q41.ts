/*
Make a array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array
*/

// Define the function to show the magicians' names
let magicians = ["James Ward Marshall", "Philip Thorner Goldstein", "James Lister Cook"]
function show_magicians(magician){
    for (let i = 0; i < magician.length; i++){
        console.log(magician[i]);
    }
}
// Call the function to show the magicians' names
show_magicians(magicians);