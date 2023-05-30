/*
45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.
*/

function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // iterate over the options array and add any key-value pairs to the car object
    options.forEach(function (option, index) {
        if (index % 2 === 0) { // if the index is even, it's a key
            car[option] = options[index + 1]; // add the key-value pair to the car object
        }
    });
    return car;
}
// call the function with the required information and two other name-value pairs
var myCar = createCar('Toyota', 'Corolla', 'color', 'blue', 'sunroof', true);
// print the object that's returned to make sure all the information was stored correctly
console.log(myCar);
