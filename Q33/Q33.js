/* 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers
end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.*/
var ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Loop through the array. 
for (var i = 0; i < ordinalNumber.length; i++) {
    var number = ordinalNumber[i];
    var ordinal = '';
    //Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log(number + ordinal);
}
