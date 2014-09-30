var test = require('tape');
var Parser = require('./');

var sheet = new Parser('sample.xlsx', 'Transcript');

test('values', function(t) {

    t.plan(1);
    t.same(sheet.values('XYZ'), [ 'x', 'y', 'z', 'q', 'b' ]);
});


test('records', function(t) {

    t.plan(1);
    t.equal(sheet.records.length, 5);
});
