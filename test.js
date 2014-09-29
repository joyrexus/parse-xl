var assert = require('assert');

var Parser = require('./');
var file = 'sample.xlsx', 
    sheet = 'Transcript'
sheet = new Parser(file, sheet);

var test_values = function() {
    assert.deepEqual(sheet.values('XYZ'), [ 'x', 'y', 'z', 'q', 'b' ]);
}

var test_records = function() {
    assert(sheet.records.length === 5);
}

// run all tests here
runTests = function() {
    test_values();
    test_records();
    console.log('all tests passed!');
};

runTests()
