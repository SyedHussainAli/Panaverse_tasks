console.log("cat" === "cat"); // true
//console.log("cat" !== "Cat"); // true


// Tests using the lower case function
console.log("CAT".toLowerCase() === "cat"); // true
console.log("Dog".toLowerCase() === "cat"); // false


//console.log(5 !== 3); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true

console.log((5 > 3) && (4 < 7)); // true
console.log((5 > 3) && (4 > 7)); // false


// Test whether an item is in an array
const myArray = [1, 2, 3, 4, 5];
console.log(myArray.includes(3)); // true
console.log(myArray.includes(6)); // false

// Test whether an item is not in an array
console.log(!myArray.includes(6)); // true
console.log(!myArray.includes(3)); // false