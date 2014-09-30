var parse = require('j');
var Readable = require('stream').Readable;


module.exports = (function () {

    var Parser = function (file) {

        this.file = file;
        var p = parse.readFile(file);
        this.data = parse.utils.to_json(p);
    };


    // Return records in specified sheet
    Parser.prototype.records = function (sheet) {

        return this.data[sheet];
    };


    // Return a readable stream of records in specified sheet
    Parser.prototype.recordStream = function (sheet) {
    
        var rs = Readable(), // { objectMode: true }),
            recs = this.data[sheet];

        rs._read = function () {

            for (var i = 0, il = recs.length; i < il; i++) {
                rs.push(JSON.stringify(recs[i]) + "\n");
            }
            rs.push(null);
        };

        return rs;     // a readable stream of records
    };


    // Return values in specified column
    Parser.prototype.values = function (sheet, column) {

        var values = [],
            recs = this.data[sheet];

        for (var i = 0, il = recs.length; i < il; i++) {
            values.push(recs[i][column]);
        }

        return values;
    }

    return Parser;
})();
