Pointshop API (PSAPI)
=========

A minimal node module providing utility methods read and write data from a MySQL server containing pointshop data.


## Installation

```shell
  npm install psapi --save
```

## Usage

```js
var psapi = require('psapi'),
    PSConnection = psapi.Connection;

var Pointshop = new PSConnection('0.0.0.0', 'root', '', 'db');
Pointshop.GetUser('5465432168').AddItem('ItemName', [], false);
```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Initial release