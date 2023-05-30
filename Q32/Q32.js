/* 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
everyone has a unique username.*/
// Make a list of five or more usernames called current_users. 
var currentUser = ["kazim", "taqi", "hussain", "hassan", "zain"];
/*Make another list of five usernames called new_users. Make sure one or two of the new usernames are
also in the current_users list*/
var newUser = ["ali", "kazim", "fareed", "hassan", "husnain"];
/*Loop through the new_users list to see if each new username has already been used. If it has, print a
message that the person will need to enter a new username. If a username has not been used, print a message saying
that the username is available.*/
for (var i = 0; i < newUser.length; i++) {
    //Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted    
    var Newuser = newUser[i].toLowerCase();
    if (currentUser.includes(Newuser)) {
        console.log("Sorry, The UserName '".concat(Newuser, "' is Already Available. Please Enter a Different UserName"));
    }
    else {
        console.log("The UserName '".concat(Newuser, "' is Available"));
    }
}
