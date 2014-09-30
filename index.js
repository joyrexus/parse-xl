var parse = require('j');
var Readable = require('stream').Readable;

module.exports = (function() {

    function Parser(file, sheet) {
        this.file = file;
        this.sheet = sheet;
        var parsed = parse.readFile(this.file);
        var data = parse.utils.to_json(parsed);
        this.records = data[sheet];
        var rs = Readable(), // { objectMode: true }),
            records = this.records,
            length = this.records.length;
        rs._read = function () {
            for (var i = 0; i < length; i++) {
                rs.push(JSON.stringify(records[i]) + "\n");
            }
            rs.push(null);
        }
        this.recordStream = rs;     // a readable stream of records
    }

    // Return values in specified column
    Parser.prototype.values = function(column) {
        var values = [];
        for (var i = 0; i < this.records.length; i++) {
            rec = this.records[i];
            values.push(rec[column]);
        }
        return values;
    }

    return Parser;
})();
