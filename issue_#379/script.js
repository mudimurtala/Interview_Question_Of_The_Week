const stock_prices = [10, 16, 5, 25, 11, 9, 2, 18, 20, 12, 25, 7, 14, 8];


let lowest_price = stock_prices[0];
let highest_profit = 0;

stock_prices.forEach((price) => {
    const profit = price - lowest_price;
    if (profit > highest_profit) {
        highest_profit = profit;
    }
    if (price < lowest_price) {
        lowest_price = price;
    }
});


console.log(highest_profit);
console.log('Script loaded successfully');
