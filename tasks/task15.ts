let favPerson: string[] = ["Itachi", "Luffy", "Naruto"];
for (let index in favPerson) {
    console.log("Hi "+favPerson[index]+" Hope you are doing well. Please come to dinner party");
}

console.log(favPerson[2]+" can't make it to the dinner party.");

favPerson[2]="Izoku Midoria";
for (let guest in favPerson) {
    console.log('Hi '+favPerson[guest]+', Hope you are doing well. Please come to dinner party');

  
}