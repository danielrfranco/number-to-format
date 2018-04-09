'use strict';

var toMoney = function(amount) {
  return amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

module.exports = toMoney;
