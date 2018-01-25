import TimerManager from './TimerManager';

let tm = new TimerManager();

tm.createTimer ("timeout 1", {
    type: "interval",
    handler: () => {
        console.log('interval!')
    },
    timeout: 2000
})

tm.createTimer ("timeout 2", {
    type: "timeout",
    handler: () => {
        console.log('time out!');
        tm.clearTimer("timeout 1");
        console.log(tm.listTimers());
    },
    timeout: 3000
})

tm.createTimer("interval 1", {
    type: "interval",
    handler: () => {
        console.log("Interval 1!");
    },
    timeout: 2000
})

tm.pauseTimer("interval 1");

setTimeout(() => {
    tm.restartTimer("interval 1");
    console.log(tm.listTimers());
}, 3000);

