/* 
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are 
writing code that will print a greeting to each user 
*/

let admin_array = ["Kazim", "Ali", "Admin", "Fareed", "Zain"];
let message = "such as Hello admin, would you like to see a status report?";
console.log("Assalam-o-Alaikum!" +" "+ admin_array[0]);
console.log("Assalam-o-Alaikum!" +" "+ admin_array[1]);
console.log("Assalam-o-Alaikum!" +" "+ admin_array[2]);
console.log("Assalam-o-Alaikum!" +" "+ admin_array[3]);
console.log("Assalam-o-Alaikum!" +" "+ admin_array[4]);

//* after they log in to a website. Loop through the array, and print a greeting to each user: 
for (let admin_array = 0; admin_array <= 4; admin_array++) {
//* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  
    if (admin_array == 0){
        console.log("Assalam-o-Alaikum! Kazim thank you for logging in again.");   
    } 
//* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  
    if (admin_array == 1){
        console.log("Assalam-o-Alaikum! Ali thank you for logging in again.");   
    }
//* If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report? 
     if (admin_array == 2){
        console.log("such as Hello Admin, would you like to see a status report?");   
    } 
//* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  
    if (admin_array == 3){
        console.log("Assalam-o-Alaikum! Fareed thank you for logging in again.");   
    }
//* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  
    if (admin_array == 4){
        console.log("Assalam-o-Alaikum! Zain thank you for logging in again.");   
    }
}