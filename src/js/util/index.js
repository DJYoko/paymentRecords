/**
 * utility functions
 */

module.exports = {
    commaSeparate: (num) => {
        return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    },
    sum: (arr) => {
        return arr.reduce(function (prev, current, i, arr) {
            return prev + current;
        });
    }
};