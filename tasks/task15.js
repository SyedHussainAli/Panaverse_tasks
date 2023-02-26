"use strict";
let favPersonn = ["Itachi", "Luffy", "Naruto"];
for (let index in favPersonn) {
    console.log("Hi " + favPersonn[index] + " Hope you are doing well. Please come to dinner party");
}
console.log(favPersonn[2] + " can't make it to the dinner party.");
favPersonn[2] = "Izoku Midoria";
for (let guest in favPersonn) {
    console.log('Hi ' + favPersonn[guest] + ', Hope you are doing well. Please come to dinner party');
}
