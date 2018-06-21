# number-to-money
 [![Version](https://img.shields.io/npm/v/number-to-money.svg)](https://www.npmjs.com/package/number-to-money)
 [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/danielrfranco/number-to-money/blob/master/LICENSE)


A lightweight and simple plugin to convert number to money format.

## Installation

`npm install number-to-money`

## Usage
### Javascript
Simply use `toMoney` function to convert any number to money format. You'll need to add manually the currency. This plugin will add it automatically in future releases.


```
import toMoney from 'number-to-money';

const number = 3000000.3;
const moneyFormat = toMoney(number);

console.log(moneyFormat);
```

##### Output

`3,000,000.30`

## Donations
Donations are **greatly appreciated!**

**[BUY ME A COFFEE](https://www.paypal.me/DanielRFranco)**
