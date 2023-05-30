/*
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names 
in a array, and then use a for loop to print the name of each pizza*/
let pizza = ["Malai Boti", "Fajita", "Chicket Tikka"]
console.log("My Favourite Pizza:");
for (let i = 0; i < pizza.length; i++){
    console.log("\t" + pizza[i]);
}
/* Modify your for loop to print a sentence using the name of the pizza instead of printing
just the name of the pizza. For each pizza you should have one line of output containing a 
simple statement like I like pepperoni pizza*/
console.log("\n");
for (let i = 0; i < pizza.length; i++){
    console.log(`I Like ${pizza[i]} Pizaa`);
}
/* Add a line at the end of your program, outside the for loop, that states how much you
like pizza. The output should consist of three or more lines about the kinds of pizza you 
like and then an additional sentence, such as I really love pizza!*/ 
console.log("I enjoy a variety of pizzas, but some of my favorites include classic margherita, pepperoni, and mushroom with truffle oil. I'm also a fan of more unique toppings such as arugula, prosciutto, and goat cheese. Pizza is one of my all-time favorite foods and I could eat it every day if I could! I really love pizza");
