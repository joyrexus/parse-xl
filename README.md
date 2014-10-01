# parse-xl

A simple module and CLI for parsing tabular data in an excel worksheet.

The parser assumes that the first line of your table contains column headers:

![sample file](sample.png)


## Usage

    npm install -g parse-xl
    npm run test
    npm run demo
    npm run cli-demo

The CLI (`bin/parse-xl.js`) takes an excel file as input and generates newline-delimited JSON as output:

    parse-xl --sheet=Transcript sample.xlsx

This outputs ...

```json
{ "_ID": "22", "ROW": "1", "LRB": "L",     "XYZ": "x" }
{ "_ID": "22", "ROW": "2", "LRB": "L+L",   "XYZ": "y" }
{ "_ID": "22", "ROW": "3", "LRB": "L+ ",   "XYZ": "z" }
{ "_ID": "22", "ROW": "4", "LRB": "L+R+B", "XYZ": "q" }
{ "_ID": "22", "ROW": "5", "LRB": "L+R+X", "XYZ": "b" }
```

The module can be used to get particular column values or to stream records:

```javascript
var Parser = require('parse-xl'),
    sample = new Parser('sample.xlsx');

// get values in a column
console.log(
  '\nValues in column `XYZ` of `Transcript`:', 
  sample.values('Transcript', 'XYZ'), 
  '\n'
);

// stream parsed records as line-delimited JSON
sample.recordStream('Transcript').pipe(process.stdout);
```

Output ...

    Values in column `XYZ` of `Transcript`: [ 'x', 'y', 'z', 'q', 'b' ] 

    {"_ID":"22","ROW":"1","LRB":"L","XYZ":"x"}
    {"_ID":"22","ROW":"2","LRB":"L+L","XYZ":"y"}
    {"_ID":"22","ROW":"3","LRB":"L+ ","XYZ":"z"}
    {"_ID":"22","ROW":"4","LRB":"L+R+B","XYZ":"q"}
    {"_ID":"22","ROW":"5","LRB":"L+R+X","XYZ":"b"}


## See Also

* [`valid-records`](https://github.com/joyrexus/valid-records) - validate
  specified fields within a set of records (ndjson)
* [`valid-xl`](https://github.com/joyrexus/valid-xl) - validate values in
  columns of an excel worksheet
