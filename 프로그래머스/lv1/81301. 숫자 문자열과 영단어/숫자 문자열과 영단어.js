// function solution(s) {
//     var answer = s;
//     let number = {"zero":0, "one":1, "two": 2, "three": 3, "four":4, "five":5, "six":6, "seven": 7, "eight":8, "nine":9}
//     for(let i =0 ; i<10; i++ ){
//       answer= answer.replaceAll(Object.keys(number)[i],number[Object.keys(number)[i]])
//     }
// return Number(answer);
// }

function solution(s) {
    var answer = s;
    
switch (true) {
        case s.includes('zero'): answer= answer.replaceAll('zero',0);
        case s.includes('one'): answer= answer.replaceAll('one',1);
        case s.includes('two'): answer= answer.replaceAll('two',2);
        case s.includes('three'): answer= answer.replaceAll('three',3);
        case s.includes('four'): answer= answer.replaceAll('four',4);
        case s.includes('five'): answer= answer.replaceAll('five',5);
        case s.includes('six'): answer= answer.replaceAll('six',6);
        case s.includes('seven'): answer= answer.replaceAll('seven',7);
        case s.includes('eight'): answer= answer.replaceAll('eight',8);
        case s.includes('nine'): answer= answer.replaceAll('nine',9);
}
    return Number(answer);
}