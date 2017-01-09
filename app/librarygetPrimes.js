module.exports = function(n) {
    var p = []
    for(var i = 2; i <=n; ++i)
        if(getPrimes(i)) p.push(i)
            return p
    }
    function getPrimes(n) {
    for(var i = 2; i <= Math.sqrt(n); ++i)
        if(n % i ==0)
            return false
        return true
}
