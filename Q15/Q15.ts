/* 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite. 
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. 
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
• Print a second set of invitation messages, one for each person who is still in your list. 
*/


let Guest = ["Fareed", "Ali", "Zain", "AbuBakar"]
let but = "But";
let message = "I Invite You to Dinner at the Night."
let dinner_message = "Could not Make the Dinner"
console.log(`${Guest[0]} ${message}`)
console.log(`${Guest[1]} ${message}`)
console.log(`${Guest[2]} ${message}`)
console.log(`${Guest[3]} ${message}`)
console.log(`${but} ${Guest[0]} ${dinner_message}`)