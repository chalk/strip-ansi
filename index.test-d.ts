import {expectType} from 'tsd';
import stripAnsi = require('.');

expectType<string>(stripAnsi('\u001B[4mcake\u001B[0m'));
