var favPerson = ["Itachi", "Luffy", "Naruto"];
for (var index in favPerson) {
    console.log("Hi " + favPerson[index] + " Hope you are doing well. Please come to dinner party");
}
console.log("Unfortunately, we had to cancel our last invitations, but we just found a bigger dinner table! We'd love to invite more guests.");
favPerson.unshift("Ali");
favPerson.splice(2, 0, "Jibran");
favPerson.push("saad");
for (var _i = 0, favPerson_1 = favPerson; _i < favPerson_1.length; _i++) {
    var guest = favPerson_1[_i];
    console.log("Hi ".concat(guest, ", please join us for dinner!"));
}
