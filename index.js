'use strict';
const ansiRegex = require('ansi-regex');
const replaceStream = require('replacestream');

module.exports = input => typeof input === 'string' ? input.replace(ansiRegex(), '') : input;
module.exports.stream = () => replaceStream(ansiRegex(), '');
