//Question :-
/**
 * Get Count Positive Number
 * From an Array
 */
const number_array = [1, 2, 3, 4, -1, -2, -3, -4, -5];
const get_count_positive_number = (arr) => {
    let count = 0;
    let element = 0;
    //itarate the each value of array
    for (let i = 0; i < arr.length; i++) {
        element = arr[i];
        //logic for extract the positive value
        if (element > -1) {
            count++;
        }
    }
    return count;
}
//function calling and store into a variable
const result = get_count_positive_number(number_array);
console.log(result);