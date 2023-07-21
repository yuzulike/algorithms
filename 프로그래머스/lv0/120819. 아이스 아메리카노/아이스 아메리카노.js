function solution(money) {
    let americano = Math.floor(money/5500);
    var answer = [americano, money - (5500*americano)];
    return answer;
}