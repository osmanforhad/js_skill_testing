//Question :-
/**
 * How to Find out The Array Count
 * Occurance of Each Element 
 */
const number_array = [1, 2, 3, 4, 5, 6, 78, 10, 1, 3, 4];
const get_array_count_for_each_clement = (arr) => {
    let count = {};
    let element = 0;
    //itarate the array value
    for (let i = 0; i < arr.length; i++) {
        //find the element
        element = arr[i];
        //logic for Count each element
        if (count[element]) {
            count[element] += 1;
        }
        else {
            count[element] = 1;
        }
    }
    return count;
}
//Function Clling and Store Into a Variable
const result = get_array_count_for_each_clement(number_array);
console.log(result);