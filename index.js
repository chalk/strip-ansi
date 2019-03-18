'use strict';
const ansiRegex = require('ansi-regex');

const stripAnsi = input => typeof input === 'string' ? input.replace(ansiRegex(), '') : input;

module.exports = stripAnsi;
module.exports.default = stripAnsi;
