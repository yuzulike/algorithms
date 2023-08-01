function solution(my_string, letter) {
    let answer= my_string.split('').filter(ele=> ele !== letter).join('')
    return answer;
}