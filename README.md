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

arrayize();              // => []
arrayize('foo');         // => [ 'foo' ]
arrayize(['foo']);       // => [ 'foo' ]
arrayize(3);             // => [ 3 ]
arrayize(function() {}); // => [ [Function] ]
arrayize(new Date());    // => [ Wed Mar 05 2014 03:29:26 GMT-0800 (PST) ]
arrayize(/foo/);         // => [ /foo/ ]
```

To run tests:

```
git clone http://github.com/tauren/arrayize
cd arrayize
npm install
npm test
```

