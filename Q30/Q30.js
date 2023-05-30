/*
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
writing code that will print a greeting to each user
*/

var admin_array = ["Kazim", "Ali", "Admin", "Fareed", "Zain"];
var message = "such as Hello admin, would you like to see a status report?";
console.log("Assalam-o-Alaikum!" + " " + admin_array[0]);
console.log("Assalam-o-Alaikum!" + " " + admin_array[1]);
console.log("Assalam-o-Alaikum!" + " " + admin_array[2]);
console.log("Assalam-o-Alaikum!" + " " + admin_array[3]);
console.log("Assalam-o-Alaikum!" + " " + admin_array[4]);
//* after they log in to a website. Loop through the array, and print a greeting to each user: 
for (var admin_array_1 = 0; admin_array_1 <= 4; admin_array_1++) {
//* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  
    if (admin_array_1 == 0) {
        console.log("Assalam-o-Alaikum! Kazim thank you for logging in again.");
    }
//* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  
    if (admin_array_1 == 1) {
        console.log("Assalam-o-Alaikum! Ali thank you for logging in again.");
    }
//* If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report? 
    if (admin_array_1 == 2) {
        console.log("such as Hello Admin, would you like to see a status report?");
    }
//* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  
    if (admin_array_1 == 3) {
        console.log("Assalam-o-Alaikum! Fareed thank you for logging in again.");
    }
//* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  
    if (admin_array_1 == 4) {
        console.log("Assalam-o-Alaikum! Zain thank you for logging in again.");
    }
}
