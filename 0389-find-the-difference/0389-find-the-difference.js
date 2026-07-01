/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let code = 0;

    for (const char of s) {
        code ^= char.charCodeAt(0);
    }

    for (const char of t) {
        code ^= char.charCodeAt(0);
    }

    return String.fromCharCode(code);
};