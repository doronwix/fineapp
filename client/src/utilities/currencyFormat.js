import currency from "currency.js";

let isM = false;
const usd = (value) => {
  if (value > 1000000) {
    value = value / 1000000;
    isM = true;
  }
  let valueForDisplay = currency(value, { symbol: "$", precision: 0 }).format(
    true
  );

  return isM ? valueForDisplay + "M" : valueForDisplay;
};

export { usd };
