#!/usr/bin/env node
var parseArgs = require('minimist');
var Parser = require(__dirname + '/../');


var options = {
    "default": { sheet: 'Sheet1' }, 
    alias: { s: 'sheet' }
};

var argv = parseArgs(process.argv.slice(2), options);
var file = argv._[0];


// print usage info
var usage = function() {

    var use = 'xlsx2json --sheet=SHEET FILE.xlsx';
    console.log(use);
};


var run = function() {

    if (argv.help) {
        usage();
        return;
    }

    if (!argv.sheet) {
        console.log('please specify a sheet to validate ...\n');
        usage();
        return;
    }

    sample = new Parser(file);

    sample.recordStream(argv.sheet)
        .pipe(process.stdout);
};

run();

