function solution(numer1, denom1, numer2, denom2) {
const add= [(numer1*denom2 + numer2*denom1),denom1*denom2]
const gcdValue = gcd(add[0],add[1])
    
    function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
    
    if (gcdValue===1) return add;
    else return add.map(ele=> ele/gcdValue)


    
    
}