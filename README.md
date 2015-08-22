[![Build Status](https://travis-ci.org/reergymerej/periodic-table.svg)](https://travis-ci.org/reergymerej/periodic-table)

Look up elements by atomic number, weight, name, or symbol.

```js
var periodicTable = require('periodic-table');

periodicTable(15);
// { number: 15, weight: 30.9738, name: 'Phosphorus', symbol: 'P' }

periodicTable('Vanadium');
// { number: 23, weight: 50.9415, name: 'Vanadium', symbol: 'V' }

periodicTable('Cl');
// { number: 17, weight: 35.453, name: 'Chlorine', symbol: 'Cl' }

// multiple results are returned as an array
periodicTable(98);
// [
//   { number: 43, weight: 98, name: 'Technetium', symbol: 'Tc' },
//   { number: 98, weight: 251, name: 'Californium', symbol: 'Cf' }
// ]

// matching is case-insensitive
periodicTable('kr');
// { number: 36, weight: 83.8, name: 'Krypton', symbol: 'Kr' }
```

data courtesy of [Israel Science and Technology Homepage](http://www.science.co.il/PTelements.asp)
