//Question :-
/**
 * How to Identify that particular given string
 * that present in an array or not
 */
//if it's present it will return true other wise false
function getWord(arr, str) {
    return arr.includes(str);
}
let userArray = ['osman', 'forhad', 'tajul', 'rajon', 'aynon', 'aziz'];
let userString = "tajul";
//Clling the function and store into a variable
let Result = getWord(userArray, userString);
console.log(Result);