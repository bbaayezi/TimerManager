import TimerManager from './TimerManager';
// window.TimerManager = TimerManager;

TimerManager.createTimer ("timeout 1", {
    type: "interval",
    handler: () => {
        console.log('interval!')
    },
    timeout: 2000
})

TimerManager.createTimer ("timeout 12", {
    type: "interval",
    handler: () => {
        console.log('interval2!')
    },
    timeout: 2000
})

TimerManager.listTimers();



setTimeout(() => {
    TimerManager.clearTimer("timeout 1");
    TimerManager.pauseTimer("timeout 12");
    TimerManager.listTimers();
    setTimeout(() => {
        TimerManager.restartTimer("timeout 12");
        TimerManager.listTimers();
    }, 2000)
}, 6000)



// tm.createTimer ("timeout 2", {
//     type: "timeout",
//     handler: () => {
//         console.log('time out!');
//         tm.clearTimer("timeout 1");
//         console.log(tm.listTimers());
//     },
//     timeout: 3000
// })

// tm.createTimer("interval 1", {
//     type: "interval",
//     handler: () => {
//         console.log("Interval 1!");
//     },
//     timeout: 2000
// })

// tm.pauseTimer("interval 1");

// setTimeout(() => {
//     tm.restartTimer("interval 1");
//     console.log(tm.listTimers());
// }, 3000);

