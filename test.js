'use strict';
var assert = require('assert');
var exec = require('child_process').exec;
var strip = require('./');

it('should strip color from string', function () {
	assert.equal(strip('\u001b[0m\u001b[4m\u001b[42m\u001b[31mfoo\u001b[39m\u001b[49m\u001b[24mfoo\u001b[0m'), 'foofoo');
});

it('should strip color from ls command', function () {
    assert.equal(strip('\u001b[00;38;5;244m\u001b[m\u001b[00;38;5;33mfoo\u001b[0m'), 'foo');
});

it('should strip reset;setfg;setbg;italics;strike;underline sequence from string', function () {
	assert.equal(strip('\x1b[0;33;49;3;9;4mbar\x1b[0m'), 'bar');
});

it('should strip color with CLI', function (cb) {
	exec('echo "\u001b[0m\u001b[4m\u001b[42m\u001b[31mfoo\u001b[39m\u001b[49m\u001b[24mfoo\u001b[0m" | ./cli.js', function (err, stdout) {
		assert.equal(stdout, 'foofoo\n');
		cb();
	});
});
