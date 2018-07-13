(function (global) {
    'use strict';

    var AppUtil = {};

    global.AppUtil = AppUtil;

    AppUtil.isValidEmail = function (value) {
        // TODO need improve code here
        return /^\S+\w+?@\w+\.\w+$/gi.test(value);
    }

    AppUtil.isTime = function (value) {
        // TODO need improve code here
        return /^\d\d:\d\d$/.test(value);
    };

    AppUtil.isTimeIn12HourClock = function (value) {
        // TODO need improve code here
        return /^[0-1][0-12]:[0-5][0-9] (am|pm)$/gi.test(value);
    };

    AppUtil.isValidNumber = function(value) {
        return /^\d*[,.]?\d*([eE][-+]\d+)?$/.test(value);
    };

    AppUtil.isValidJsFileName = function (value) {
        return /^[\w.-]+\.js$/.test(value);
    };

})(typeof module !== 'undefined' ? module.exports : window);
