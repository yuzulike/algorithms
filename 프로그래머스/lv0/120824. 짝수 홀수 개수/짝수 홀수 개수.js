function solution(num_list) {
    var answer = [0,0];
    num_list.forEach(ele=>ele%2? answer[1]++ : answer[0]++ )
    return answer;
}