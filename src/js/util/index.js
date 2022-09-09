/**
 * utility functions
 */

module.exports = {
    commaSeparate: (num) => {
        return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    },
    sortByPayedAt(a, b) {
        return new Date(a.payed_at) - new Date(b.payed_at)
    },
    sum: (arr) => {
        return arr.reduce(function (prev, current, i, arr) {
            return prev + current
        })
    },
    zeroPadding: (NUM, LEN) => {
        if (typeof NUM !== 'number' || typeof LEN !== 'number') {
            return ''
        }
        return (Array(LEN).join('0') + NUM).slice(-LEN)
    },
}
