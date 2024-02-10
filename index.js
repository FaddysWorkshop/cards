import dealer from './dealer.js';
import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const $ = Symbol .for;
const cli = createInterface ( { input, output } );

cli .on ( 'line', async line => console .log ( ( await dealer ( $ ( 'execute' ), line ) ) ) .resolution );

cli .on ( 'error', error => console .error ( error ) );

console .log ( ( await dealer ( $ ( 'start' ) ) ) .resolution );

cli .prompt ();
