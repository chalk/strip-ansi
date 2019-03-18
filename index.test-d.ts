import {expectType} from 'tsd-check';
import stripAnsi from '.';

expectType<string>(stripAnsi('\u001B[4mcake\u001B[0m'));
