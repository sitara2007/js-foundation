
const foodItems = [
    { name: "Bread", quantity: 5, category: "Bakery" },
    { name: "Milk", quantity: 2, category: "Dairy" },
    { name: "Apple", quantity: 10, category: "Fruit" }
];
const itemNames = foodItems.map(item => item.name);
console.log("Item Names:", itemNames);
const abundantItems = foodItems.filter(item => item.quantity > 3);
console.log("Items with enough quantity:", abundantItems);
console.log("All items in stock:");
foodItems.forEach(item => {
    console.log(`${item.name} - ${item.quantity}`);
});
