module.exports = function reverse(n) {
    let res = (n<0?-1:1)*parseInt(n.toString().split('').reverse().join(''));
    return res < 0 ? (res / -1) : res;
}

