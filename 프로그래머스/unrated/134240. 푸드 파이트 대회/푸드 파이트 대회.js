function solution(food) {
    var answer = '';
    for(let i=0; i<food.length; i++){
        answer += (i+"").repeat(Math.floor(food[i]/2));
    }
    return answer+"0"+answer.split('').reverse().join('');
}