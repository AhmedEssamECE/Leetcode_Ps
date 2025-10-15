var maxProfit = function (prices) {
  let min_price = Number.MAX_SAFE_INTEGER;
  let max_profit = 0;
  for (let currentPrice of prices) {
    min_price = Math.min(min_price, currentPrice);
    max_profit = Math.max(max_profit, currentPrice - min_price);
  }
  return max_profit;
};
