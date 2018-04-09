export function toMoney(amount: number) {
  return amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}
