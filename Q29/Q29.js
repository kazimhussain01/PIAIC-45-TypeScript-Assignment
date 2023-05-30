/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array.
*/
//* Make a array of your three favorite fruits and call it favorite_fruits
/*  Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is
in your array, the if block should print a statement, */
//* such as You really like bananas!

var favorite_fruits = ["Apple", "Banana", "Peach"];
for (var favorite_fruits_1 = 0; favorite_fruits_1 <= 2; favorite_fruits_1++) {
    if (favorite_fruits_1 == 0) {
        console.log("uch as You really like Apple!");
    }
    if (favorite_fruits_1 == 7) {
        console.log("such as You do not really like Fruits!");
    }
    if (favorite_fruits_1 == 9) {
        console.log("such as You do not also really like Fruits!");
    }
    if (favorite_fruits_1 == 1) {
        console.log("such as You really like Banana!");
    }
    if (favorite_fruits_1 == 2) {
        console.log("such as You really like Peach!");
    }
}
