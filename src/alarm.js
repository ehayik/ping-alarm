/**
 * Created by eljaiek on 7/18/17.
 */

'use strict';

'use strict';

import ping from 'tcp-ping';

const DELAY = 500;

export default class Alarm {

    constructor(host) {
        this.host = host;
        this.enabled = false;
        this.intervalId = undefined;
    }

    lock() {
        this.enabled = true;
        debugger;
        return new Promise((resolve, reject) => {
            this.intervalId = setInterval(() => {
                if (this.enabled === false) return;

                ping.probe(this.host, 80, (err, available) => {

                    if (!available && this.enabled) {
                        reject(this.host);
                        this.unlock();
                    }
                });
            });
        }, DELAY);
    }

    unlock() {
        this.enabled = false;
        clearInterval(this.intervalId);
    }
}