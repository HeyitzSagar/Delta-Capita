const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];
function calculateTotalPrice(items) {
    const prices = {
        "Apple": 35,
        "Banana": 20,
        "Melon": 50,
        "Lime": 15
    };

    const itemCounts = {};
    
    for (const item of items) {
        itemCounts[item] = (itemCounts[item] || 0) + 1;
    }
    console.log("Item counts: ", itemCounts);
    let total = 0;
    
    for (const item in itemCounts) {
        const count = itemCounts[item];
        switch (item) {
            case "Melon":
                total += Math.floor(count / 2) * prices[item] + (count % 2) * prices[item];
                break;
            case "Lime":
                total += Math.floor(count / 3) * 2 * prices[item] + (count % 3) * prices[item];
                break;
            default:
                total += count * prices[item];
        }
    }

    return total;
}
console.log("Total Price: ", calculateTotalPrice(basket), "p");
