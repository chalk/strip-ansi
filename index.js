'use strict';
const ansiRegex = require('ansi-regex');

module.exports = function (input) {
	return typeof input === 'string' ? input.replace(ansiRegex(), '') : input;
}
