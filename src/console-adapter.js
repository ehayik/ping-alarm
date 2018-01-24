'use strict';

import clear from 'cli-clear';
import Chalk from 'chalk';
import Figlet from 'figlet';

const error = Chalk.bold.red;

const info = Chalk.blue.bold;

const success = Chalk.green.bold;

export default class Console {

    static title() {
        this.clear();
        let appTitle = Chalk.yellow(Figlet.textSync('Nanolarm 1.0', {horizontalLayout: 'full'}));
        console.log(appTitle);
        this.info('Author: Eduardo Eljaiek Rodriguez');
    }

    static clear() {
        clear();
    }

    static error(message) {
        console.log(error(message));
    }

    static info(message) {
        console.log(info(message));
    }

    static success(message) {
        console.log(success(message));
    }
}