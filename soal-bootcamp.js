/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    // first way
    // manual arrange 
    var higher = numbers[0];
    numbers.forEach(function (val, index) {
        if (higher < numbers[index]) {
            higher = val;
        }
    });
    return higher;
}
    // or using this code bellow is the instead of method above

function second_result(numbers)
{
    // return Math.max(...numbers);
    // you can replace code '...' above code with apply like this code bellow : 
    return Math.max.apply(null, numbers);
}

console.log("Expected Result : ", result(numbers), "\n\nso highest number of ",numbers,"\nis : ",second_result(numbers));