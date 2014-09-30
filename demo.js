var Parser = require('./');
        
var sample = new Parser('sample.xlsx'),
    sheet = 'Transcript',
    column = 'XYZ';

// get values in a column
console.log(
    '\nValues in `' + sheet + '` column `' + column + '`:', 
    sample.values(sheet, column),
    '\n'
);

// stream parsed records as line-delimited JSON
sample.recordStream('Transcript')
    .pipe(process.stdout);
