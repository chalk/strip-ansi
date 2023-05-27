import ansiRegex from 'ansi-regex';

const re = ansiRegex();
export default function stripAnsi(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	}

	return string.replace(re, '');
}
