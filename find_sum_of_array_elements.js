//Question :-
/**
 * Find Sum of an Array Element
 */
const NumberValue = [1, 2, 3, 4, 5, 6];
const getSumOfArrayElement = (arr) => {
    let sum = 0;
    //itarate the array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//function calling and store value into a variable
const Result = getSumOfArrayElement(NumberValue);
console.log(Result);