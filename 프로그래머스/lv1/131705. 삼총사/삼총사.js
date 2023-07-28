function solution(number) {
    var answer = 0;
    let added = 0;
    for (let i =0; i< number.length ; i++){
        for(let j=i+1; j<number.length; j++ ){
        added = number[i]+number[j];
        let newNum= number.filter((ele,n)=> ele== -added && n>j)   
            if(newNum.length) answer += newNum.length ;
        }
    }
    return answer;
}