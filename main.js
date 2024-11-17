/**
 * Example Concat 2 array
 * 
 * Method one
 */
let City = ["Dhaka", "Chittagong", "Khulna", "Sylhet", "Rangpur"];

let Country = ["Bangladesh", "India", "China", "Vutan", "Nepal", "Pakisthan"];

let Result = City.concat(Country);

console.log(Result);


/**
 * Example Concat 2 array
 * 
 * Method two
 */
let Number1 = [1, 2, 3, 4, 5, 6, 7, 8];

let Number2 = [9, 10, 11, 12, 13, 14, 15, 16,];

let Output = [...Number1, ...Number2];

console.log(Output);

