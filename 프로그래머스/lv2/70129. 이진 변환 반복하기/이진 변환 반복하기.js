function solution(s) {
    let count = 0;
    let zeroCount =0;
    while(s.length > 1){
        let arr =s.split('');
        let arrLength= arr.filter(ele=> ele === '1').length;
        s = arrLength.toString(2);
        count++;
        zeroCount += arr.length- arrLength;
    }
    return [count,zeroCount];
}