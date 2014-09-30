var test = require('tape');
var Parser = require('./');

var sample = new Parser('sample.xlsx');


test('values', function (t) {

    t.plan(1);
    t.same(sample.values('Transcript', 'XYZ'), [ 'x', 'y', 'z', 'q', 'b' ]);
});


test('records', function (t) {

    t.plan(1);
    t.equal(sample.records('Transcript').length, 5);
});
