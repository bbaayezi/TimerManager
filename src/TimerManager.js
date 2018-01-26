import _ from 'underscore';

class TimerManager {
    timers = [];
    createTimer (name, options = { // Options requires an Object
        type = string,
        handler = null,
        timeout = 1000 // Default timeout set to 1000ms
    } = {}) {
        // Determine instance wheather set interval or set timeout
        (options.type == "interval") ?
        this.timers.push({
            name, 
            timeout: options.timeout, 
            type: options.type, 
            observer: window.setInterval(options.handler, options.timeout), 
            handler: options.handler
        }) :
        this.timers.push({name, 
            timeout: options.timeout, 
            type: options.type, 
            observer: window.setTimeout(options.handler, options.timeout), 
            handler: options.handler
        });
    }

    clearTimer (name) {
        this.timers = _.without(this.timers, this.pauseTimer(name, true).value());
    }

    findTimer (name, isUnderscore = null) { // Second arguments used only in this class
        return isUnderscore ?
        _.chain(this.timers).findWhere({name}) :
        _.chain(this.timers).findWhere({name}).value();
    }

    pauseTimer (name, requireReturn = null) { // Second arguments used only in this class
        let clearObj = this.findTimer(name, true);
        (clearObj.value().type == "interval") ?
        window.clearInterval(clearObj.value().observer) :
        window.clearTimeout(clearObj.value().observer);
        return requireReturn ?
        clearObj :
        null
    }

    restartTimer (name) {
        let obj = this.findTimer(name);
        obj.observer = (obj.type == "interval") ?
        window.setInterval(obj.handler, obj.timeout) :
        window.setTimeout(obj.handler, obj.timeout)
    }

    listTimers () {
        console.log(this.timers);
    }

    getTimers () {
        return this.timers;
    }
}

export default new TimerManager();

window.TimerManager = new TimerManager();