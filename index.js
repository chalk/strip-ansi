import ansiRegex from 'ansi-regex';

const regex = ansiRegex();

export default function stripAnsi(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	}

	// Fast path: if no ESC byte exists, there are no ANSI codes
	if (!string.includes('\u001B')) {
		return string;
	}

	// Even though the regex is global, we don't need to reset the `.lastIndex`
	// because unlike `.exec()` and `.test()`, `.replace()` does it automatically
	// and doing it manually has a performance penalty.
	return string.replace(regex, '');
}
