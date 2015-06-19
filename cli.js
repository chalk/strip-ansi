#!/usr/bin/env node
'use strict';
var fs = require('fs');
var meow = require('meow');
var stripAnsi = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ strip-ansi <input-file> > <output-file>',
		'  $ cat <input-file> | strip-ansi > <output-file>',
		'',
		'Example',
		'  $ strip-ansi unicorn.txt > unicorn-stripped.txt'
	]
});

var input = cli.input[0];

function init(data) {
	process.stdout.write(stripAnsi(data));
}

if (!input && process.stdin.isTTY) {
	console.error('Expected a filename');
	process.exit(1);
}

if (input) {
	init(fs.readFileSync(input, 'utf8'));
} else {
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', init);
}
