"use strict";
let place = ['canada', 'Iran', 'Amerca', 'Saudia Arab', 'Thiland'];
console.log(place);
console.log("Original order:", place);
console.log("Alphabetical order:", [...place].sort());
// original order
console.log("Original order:", place);
console.log("Reverse alphabetical order:", [...place].sort().reverse());
console.log("Original order:", place);
// Reverse the order of the list
place.reverse();
// Print the array to show that its order has changed
console.log("Reversed order:", place);
// Reverse the order of the list again
place.reverse();
// Print the list to show it's back to its original order
console.log("Original order:", place);
// Sort the array so it's stored in alphabetical order
place.sort();
// Print the array to show that its order has been changed
console.log("Alphabetical order:", place);
// Sort to change the array so it's stored in reverse alphabetical order
place.sort((a, b) => b.localeCompare(a));
// Print the list to show that its order has changed
console.log("Reverse alphabetical order:", place);
