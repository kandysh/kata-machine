"use strict";
exports.__esModule = true;
function two_crystal_balls(breaks) {
    var highBreak = 0;
    var jumps = Math.floor(Math.sqrt(breaks.length));
    for (var i = 1; i < breaks.length; i = i * jumps) {
        console.log(i);
        if (breaks[i]) {
            console.log('high', i);
            highBreak = i;
            break;
        }
    }
    for (var i = highBreak - jumps; i <= highBreak; i++) {
        if (breaks[i]) {
            console.log('break', i);
            return i;
        }
    }
    return -1;
}
exports["default"] = two_crystal_balls;
