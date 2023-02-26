"use strict";
let favPerson = ["Itachi", "Luffy", "Naruto"];
for (let index in FavPerson) {
    console.log("Hi " + FavPerson[index] + " Hope you are doing well. Please come to dinner party");
}
console.log("Unfortunately, we had to cancel our last invitations, but we just found a bigger dinner table! We'd love to invite more guests.");
FavPerson.unshift("Ali");
FavPerson.splice(2, 0, "Jibran");
FavPerson.push("saad");
for (let guest of FavPerson) {
    console.log(`Hi ${guest}, please join us for dinner!`);
}
