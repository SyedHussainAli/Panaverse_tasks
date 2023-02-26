// Define the makeShirt function
function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love Javascript'; }
    console.log("A ".concat(size, "-sized shirt will be made with the message '").concat(message, "' printed on it."));
}
// Call the makeShirt function
makeShirt();
// Call the makeShirt function
makeShirt("medium", "Itachi Uchiha");
