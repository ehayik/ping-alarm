'use strict';

import EventEmitter from 'events';
import Alarm from './alarm';

export default class AlarmCenter extends EventEmitter {

    constructor() {
        super();
        EventEmitter.call(this);
    }

    register(host) {
        this.alarm = new Alarm(host);
        this.alarm.lock().catch((host) => {
            this.emit('fired', host);
        });
    }

    clear() {
        if (this.alarm === undefined) return;
        this.alarm.unlock();
    }
}