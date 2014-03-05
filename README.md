arrayize
========

Return input if it is an array, otherwise return input wrapped in an array. If input is null or undefined, return empty array.

Installation:

```
npm install arrayize
```

Usage:

```javascript
var arrayize = require('arrayize');

console.log( arrayize() );              // []
console.log( arrayize('foo') );         // ['foo']
console.log( arrayize(['foo']) );       // ['foo']
console.log( arrayize(3) );             // [3]
console.log( arrayize(function() {}) ); // [function]
```

To run tests:

```
git clone http://github.com/tauren/arrayize
cd arrayize
npm install
npm test
```

