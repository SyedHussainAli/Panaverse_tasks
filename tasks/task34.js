// Define an array of pizza names
var pizzas = ['Margherita', 'Pepperoni', 'Hawaiian'];
// Use a for loop to print the name of each pizza
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
// Modify the for loop to print a sentence using the name of the pizza
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print a statement about how much you like pizza
console.log("I really love pizza! Here are some of my favorites:");
for (var _b = 0, pizzas_3 = pizzas; _b < pizzas_3.length; _b++) {
    var pizza = pizzas_3[_b];
    console.log("- ".concat(pizza));
}
