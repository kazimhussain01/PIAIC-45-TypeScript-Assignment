/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
statements that check for certain fruits in your array. 
*/

//* Make a array of your three favorite fruits and call it favorite_fruits
/*  Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
in your array, the if block should print a statement, */
//* such as You really like bananas!

let favorite_fruits = ["Apple", "Banana", "Peach"]
for (let favorite_fruits = 0; favorite_fruits <= 2; favorite_fruits++) {
    if (favorite_fruits == 0) {
        console.log("uch as You really like Apple!");
    } if (favorite_fruits == 7) {
        console.log("such as You do not really like Fruits!");
    } if (favorite_fruits == 9) {
        console.log("such as You do not also really like Fruits!");
    } if (favorite_fruits == 1) {
        console.log("such as You really like Banana!");
    } if (favorite_fruits == 2) {
        console.log("such as You really like Peach!");
    }
}