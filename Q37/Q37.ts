/* 
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default 
message, and a shirt of any size with a different message. 
*/

function make_shirt(size= "large", message= "I Loved TypeScript!"){
    console.log(`Printing ${message} on a ${size}-size shirt`);
}

make_shirt(); //Printing I Loved TypeScript! on a Large-sized shirt
make_shirt("medium") //Printing I Loved TypeScript! on a medium-sized shirt
make_shirt("Small", "TypeScript! si a Awesome Language") //Printing TypeScript! is a Awesome Language on a Large-sized shirt
