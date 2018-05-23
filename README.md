A lightweight and simple plugin to convert number to money format.

## Instalation

`npm install number-to-money`

or

`yarn add number-to-money`


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
