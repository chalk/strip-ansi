'use strict';
var assert = require('assert');
var exec = require('child_process').exec;
var strip = require('./index');

it('should strip color from string', function () {
	assert.equal(strip('\x1b[0m\x1b[4m\x1b[42m\x1b[31mfoo\x1b[39m\x1b[49m\x1b[24mfoo\x1b[0m'), 'foofoo');
});

it('should strip reset;setfg;setbg;italics;strike;underline sequence from string', function () {
	assert.equal(strip('\x1b[0;33;49;3;9;4mbar\x1b[0m'), 'bar');
});

it('should strip color with CLI', function (done) {
	exec('echo "\x1b[0m\x1b[4m\x1b[42m\x1b[31mfoo\x1b[39m\x1b[49m\x1b[24mfoo\x1b[0m" | ./cli.js', function (err, stdout) {
		assert.equal(stdout, 'foofoo\n');
		done();
	});
});
