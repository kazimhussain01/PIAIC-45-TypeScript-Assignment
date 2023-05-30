/* 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/


var Guest = ["Fareed", "Ali", "Zain", "AbuBakar"];
var but = "But";
var message = "I Invite You to Dinner at the Night.";
var dinner_message = "Could not Make the Dinner";
console.log("".concat(Guest[0], " ").concat(message));
console.log("".concat(Guest[1], " ").concat(message));
console.log("".concat(Guest[2], " ").concat(message));
console.log("".concat(Guest[3], " ").concat(message));
console.log("".concat(but, " ").concat(Guest[0], " ").concat(dinner_message));
