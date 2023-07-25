function solution(x) {
    let arr = x.toString().split('');
    var answer = 0;
    
    for(let i =0; i< arr.length ; i++){
    answer += Number(arr[i]);
    }
    return x % answer ? false : true;
}