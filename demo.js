var Parser = require(__dirname + '/');
        
sheet = new Parser('sample.xlsx', 'Transcript');

// get values in a column
console.log('\nValues in column `XYZ`:', sheet.values('XYZ'), "\n");

// stream parsed records as line-delimited JSON
sheet.recordStream.pipe(process.stdout);
