import ansiRegex from 'ansi-regex';

const regex = ansiRegex();

export default function stripAnsi(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	}

	// Even though the regex is global, we don't need to reset the lastIndex
	// because unlike exec/test, replace does it automatically and doing it manually
	// has a perf penalty.
	return string.replace(regex, '');
}
