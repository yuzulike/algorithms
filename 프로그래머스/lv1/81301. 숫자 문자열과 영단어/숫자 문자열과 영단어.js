function solution(s) {
    var answer = s;
    let number = {"zero":0, "one":1, "two": 2, "three": 3, "four":4, "five":5, "six":6, "seven": 7, "eight":8, "nine":9}
    for(let i =0 ; i<10; i++ ){
      answer= answer.replaceAll(Object.keys(number)[i],number[Object.keys(number)[i]])
    }
return Number(answer);
}