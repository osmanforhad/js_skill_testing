//Question :-
/**
 * Find Missing Number From an Array
 */
const number_array = [1, 2, 3, 5];
const get_missing_number = (arr) => {
    let blank_array = [];
    //get min and max length of given array
    let min_number = Math.min(...number_array);
    let max_number = Math.max(...number_array);
    //itarate the array value
    for (let i = min_number; i < max_number; i++) {
        //logic for extract the missing number
        if (arr.indexOf(i) < 0) {
            //push the missing number into the blank_aray
            blank_array.push(i);
        }
    }
    return blank_array;
}
//function clling and store into variable
const Result = get_missing_number(number_array);
console.log(Result);