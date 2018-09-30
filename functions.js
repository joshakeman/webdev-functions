function dayOfWeek(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function greetByDay(date) {
  // Add your code here
  console.log(`Happy ${dayOfWeek(date)}!`);
}

let now = new Date();
greetByDay(now); // Happy Wednesday!




function calculateSalesTax(prices, tax) {
  let result = [];

  for (let i = 0; i < prices.length; i++) {
  	result.push(prices[i] + prices[i] * tax);
  }
  return result;
}

console.log(calculateSalesTax([1, 5, 10], 0.15)); // [ 1.15, 5.75, 11.5 ]