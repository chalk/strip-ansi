import {expectType} from 'tsd';
import stripAnsi from './index.js';

expectType<string>(stripAnsi('\u001B[4mcake\u001B[0m'));
