export default class TimerManager {
    timers = [];
    createTimer (name, options = {
        type = string,
        handler = null,
        timeout = number
    } = {}) {
        switch (options.type) {
            case "interval":
            this.timers.push({name, timeout: options.timeout, type: options.type, observer: window.setInterval(options.handler, options.timeout), handler: options.handler})
            break;
            case "timeout":
            this.timers.push({name, timeout: options.timeout, type: options.type, observer: window.setTimeout(options.handler, options.timeout), handler: options.handler})
            break;
        }
    }

    clearTimer (name) {
        for (let i = 0; i < this.timers.length; i++) {
            if (this.timers[i].name == name && this.timers[i].type == "interval") {
                window.clearInterval(this.timers[i].observer);
                this.timers.splice(i, 1);
            } else if (this.timers[i].name == name && this.timers[i].type == "timeout") {
                window.clearTimeout(this.timers[i].observer);
                this.timers.splice(i, 1);
            }
        }
    }

    pauseTimer (name) {
        for (let i = 0; i < this.timers.length; i++) {
            if (this.timers[i].name == name && this.timers[i].type == "interval") {
                window.clearInterval(this.timers[i].observer);
            } else if (this.timers[i].name == name && this.timers[i].type == "timeout") {
                window.clearTimeout(this.timers[i].observer);
            }
        }
    }

    restartTimer (name) {
        for (let i = 0; i < this.timers.length; i++) {
            if (this.timers[i].name == name && this.timers[i].type == "interval") {
                this.timers[i].observer = window.setInterval(this.timers[i].handler, this.timers[i].timeout);
            } else if (this.timers[i].name == name && this.timers[i].type == "timeout") {
                this.timers[i].observer = window.setTimeout(this.timers[i].handler, this.timers[i].timeout);
            }
        }
    }

    listTimers () {
        return this.timers;
    }
}
