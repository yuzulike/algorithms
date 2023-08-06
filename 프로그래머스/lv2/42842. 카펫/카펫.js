function solution(brown, yellow) {
    var answer = [];
    for(let i=1; i<=yellow; i++){
        if(yellow%i ==0 && (i+2)*(yellow/i+2)== brown+yellow){
            answer= [Math.max(i+2, yellow/i+2), Math.min(i+2, yellow/i+2)]
        }
    }
   
    return answer;
}