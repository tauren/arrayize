arrayize
========

Return input if it is an array, otherwise return input wrapped in an array. If input is null or undefined, return empty array.

# Installation

```
npm install arrayize
```

# Usage

```javascript
var arrayize = require('arrayize');

// Empty array if passed undefined or null
arrayize();                     // => []
arrayize(null);                 // => []

// Original array if passed an array
arrayize([]);                   // => []
arrayize(['foo']);              // => [ 'foo' ]
arrayize(['foo','bar','baz']);  // => [ 'foo', 'bar', 'baz' ]

// Original value wrapped in an array if passed anything else
arrayize('foo');                // => [ 'foo' ]
arrayize(3);                    // => [ 3 ]
arrayize({foo:'bar'});          // => [ { foo: 'bar' } ]
arrayize(function() {});        // => [ [Function] ]
arrayize(new Date());           // => [ Wed Mar 05 2014 03:29:26 GMT-0800 (PST) ]
arrayize(/foo/);                // => [ /foo/ ]
```

# Running tests

```
git clone http://github.com/tauren/arrayize
cd arrayize
npm install
npm test
```

