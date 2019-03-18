import {expectType} from 'tsd-check';
import stripAnsi from '.';

expectType<string>(stripAnsi('\u001b[4mcake\u001b[0m'));
