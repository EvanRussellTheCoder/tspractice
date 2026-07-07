/*

You’re given an array prices, where prices[i] is the price of a stock on day i.

You may choose one day to buy and a later day to sell. 
Return the maximum profit you can make. 
If no profit is possible, return 0.

Input:  [7, 1, 5, 3, 6, 4]
Output: 5

You buy at 1 and sell later at 6, making a profit of 5.

A couple of rules:

You can make only one transaction.
You must buy before you sell.
You cannot sell and then use an earlier price as your buying price.

*/

function bestTimeFirstTry(prices: number[]): number {

    let lowest = 0;
    let highest = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] < lowest) {
            lowest = prices[i]
            highest = prices[i]
        }

        if (prices[i] > highest) {
            highest = prices[i]
        }

        for (let j = 0; j < prices.length; j++) {

            if (prices[j] > highest) {
                highest = prices[j];
                lowest = prices[j];
            }

        }

        return highest - lowest;

    }

    return 0;

}

function bestTimeBrute(prices: number[]): number {

    let maxProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];

            if (profit > maxProfit) {
                maxProfit = profit
            }
        }
    }

    return maxProfit;

}

function bestTimeOptimized(prices: number[]): number {

    let lowestPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        lowestPrice = Math.min(lowestPrice, prices[i]);

        const currentProfit = prices[i] - lowestPrice;
        maxProfit = Math.max(maxProfit, currentProfit);

    }

    return maxProfit;
    
}