import ansiRegex from 'ansi-regex';

const regex = ansiRegex();

export default function stripAnsi(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	}

	regex.lastIndex = 0;
	return string.replace(regex, '');
}
