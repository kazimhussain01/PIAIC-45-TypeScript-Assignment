/*
: Write a function called describe_city() that accepts the name ofa city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
for the country a default value. Call your function for three different cities, at least one of
which is not in the default country
*/

function describe_city(city= "Karachi", country= "Pakistan"){
    console.log(`Printing ${city} is in ${country}`);   
}
// Call describe_city() for three different cities
describe_city(); // Karachi is in Pakistan
describe_city("Lahore");
describe_city("New York", "USA")
