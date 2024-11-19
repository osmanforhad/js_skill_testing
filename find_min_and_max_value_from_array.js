//Question :-
/**
 * Find Minimum and Maximum Value Together
 * From an Number Array
 */
const NumberArray = [1, 2, 3, 4, 5];
const getValue = (arr) => {
    return [Math.min(...arr), Math.max(...arr)];
}
//Function Calling and Store into a Variable
const Result = getValue(NumberArray);
console.log(Result);