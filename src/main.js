'use strict';

import Console from './console-adapter';
import AlarmCenter from './alarm-center';
import Inquirer from 'inquirer';

const alarmCenter = new AlarmCenter();
const player = require('play-sound')();

let audio = player.play('./media/car-alarm.mp3', function (err) {
    if (err) console.log('Could not play sound: ' + err);
});

main();

function main() {
    Console.title();
    alarmCenter.on('fired', (host) => {
        clear();
        Console.error(`Alarm fired, IP Address: ${host}`);
        let audio = player.play('./media/car-alarm.mp3', function (err) {
            if (err) console.log('Could not play sound: ' + err);
        });
    });

    enableAlarm();
}

function clear() {
    Console.clear();
    Console.title();
}

function enableAlarm() {
    let question = [{
        name: 'host',
        type: 'input',
        message: 'Enter your nano IP address:',
        // validate: function(value) {
        //     if (Ip.isV4Format(value)) return true;
        //     return 'Please enter a valid Ip address';
        // }
    }];

    Inquirer.prompt(question).then((answers) => {
        alarmCenter.register(answers.host);
        clear();
        Console.success(`Alarm enabled, IP Address: ${answers.host}`);
        // disableAlarm();
    });
}