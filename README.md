# ratio-selector
> A lightweight JavaScript utility for weighted random selection based on ratios.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## Features
- 🎯 Weighted random selection based on probability ratios
- 🎲 Precise probability distribution
- 💪 Type safe with TypeScript support
- 🧪 Well tested with comprehensive test cases

## Installation
```shell
yarn add @jswork/ratio-selector
```

## Usage
```js
import ratioSelector from '@jswork/ratio-selector';

// Basic usage - items with probability ratios
const items = [
  { name: 'A', value: 0.5 }, // 50% chance
  { name: 'B', value: 0.3 }, // 30% chance
  { name: 'C', value: 0.2 }  // 20% chance
];

const result = ratioSelector(items);
// Returns: 'A' or 'B' or 'C' based on their probabilities

// Example: Reward distribution
const rewards = [
  { name: 'Common', value: 0.7 },
  { name: 'Rare', value: 0.25 },
  { name: 'Epic', value: 0.05 }
];

const reward = ratioSelector(rewards);
// Returns a reward type based on rarity
```

## Notes
- The sum of all values must be approximately 1
- Each item must have a `name` (string) and `value` (number) property
- Values represent probability ratios (e.g., 0.3 = 30% chance)

## License
Code released under [the MIT license](https://github.com/afeiship/ratio-selector/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/ratio-selector
[version-url]: https://npmjs.org/package/@jswork/ratio-selector

[license-image]: https://img.shields.io/npm/l/@jswork/ratio-selector
[license-url]: https://github.com/afeiship/ratio-selector/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/ratio-selector
[size-url]: https://github.com/afeiship/ratio-selector/blob/master/dist/ratio-selector.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/ratio-selector
[download-url]: https://www.npmjs.com/package/@jswork/ratio-selector
