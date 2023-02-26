// Define an array of pizza names
const pizzas: string[] = ['Margherita', 'Pepperoni', 'Hawaiian'];

// Use a for loop to print the name of each pizza
for (const pizza of pizzas) {
  console.log(pizza);
}

// Modify the for loop to print a sentence using the name of the pizza
for (const pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Print a statement about how much you like pizza
console.log(`I really love pizza! Here are some of my favorites:`);
for (const pizza of pizzas) {
  console.log(`- ${pizza}`);
}