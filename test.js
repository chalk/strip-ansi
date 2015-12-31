import test from 'ava';
import fn from './';

test('strip color from string', t => {
	t.is(fn('\u001b[0m\u001b[4m\u001b[42m\u001b[31mfoo\u001b[39m\u001b[49m\u001b[24mfoo\u001b[0m'), 'foofoo');
});

test('strip color from ls command', t => {
	t.is(fn('\u001b[00;38;5;244m\u001b[m\u001b[00;38;5;33mfoo\u001b[0m'), 'foo');
});
test('strip reset;setfg;setbg;italics;strike;underline sequence from string', t => {
	t.is(fn('\x1b[0;33;49;3;9;4mbar\x1b[0m'), 'bar');
});
