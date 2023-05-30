/*
: Write a function called describe_city() that accepts the name ofa city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
for the country a default value. Call your function for three different cities, at least one of
which is not in the default country
*/

function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("Printing ".concat(city, " is in ").concat(country));
}
// Call describe_city() for three different cities
describe_city(); // Karachi is in Pakistan
describe_city("Lahore");
describe_city("New York", "USA");
