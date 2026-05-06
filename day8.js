const calculatePrice = (quantity, pricePerItem) => {
    return quantity * pricePerItem;
};

const appleQuantity = 10;
const applePrice = 2;

const totalCost = calculatePrice(appleQuantity, applePrice);

console.log(`Total cost is: $${totalCost}`);
