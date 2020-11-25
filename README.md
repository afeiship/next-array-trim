# next-array-trim
> Trim array like string.trim for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-array-trim
```

## usage
```js
import '@jswork/next-array-trim';

const arr = [undefined, undefined, undefined, 'a', 'b', 'c', undefined];
nx.arrayTrim(arr);    // ['a','b','c']
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-array-trim/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-array-trim
[version-url]: https://npmjs.org/package/@jswork/next-array-trim

[license-image]: https://img.shields.io/npm/l/@jswork/next-array-trim
[license-url]: https://github.com/afeiship/next-array-trim/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-array-trim
[size-url]: https://github.com/afeiship/next-array-trim/blob/master/dist/next-array-trim.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-array-trim
[download-url]: https://www.npmjs.com/package/@jswork/next-array-trim
