let favPerson: string[] = ["Itachi", "Luffy", "Naruto"];
for (let index in favPerson) {
    console.log("Hi "+favPerson[index]+" Hope you are doing well. Please come to dinner party");
}
console.log("Unfortunately, we had to cancel our last invitations, but we just found a bigger dinner table! We'd love to invite more guests.");

favPerson.unshift("Ali");
favPerson.splice(2, 0, "Jibran");
favPerson.push("saad");

for (let guest of favPerson) {
  console.log(`Hi ${guest}, please join us for dinner!`);
}