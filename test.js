'use strict';
var test = require('ava');
var fn = require('./');

test('strip color from string', function (t) {
	t.assert(fn('\u001b[0m\u001b[4m\u001b[42m\u001b[31mfoo\u001b[39m\u001b[49m\u001b[24mfoo\u001b[0m') === 'foofoo');
	t.end();
});

test('strip color from ls command', function (t) {
	t.assert(fn('\u001b[00;38;5;244m\u001b[m\u001b[00;38;5;33mfoo\u001b[0m') === 'foo');
	t.end();
});
test('strip reset;setfg;setbg;italics;strike;underline sequence from string', function (t) {
	t.assert(fn('\x1b[0;33;49;3;9;4mbar\x1b[0m') === 'bar');
	t.end();
});
