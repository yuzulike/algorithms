function solution(s) {
    let number= true;
    for(let i =0; i< s.length ; i++){
        number = !isNaN(Number(s[i]))
        if(number== false) break;
    }
    return( s.length == 4 || s.length == 6 ) && number
}