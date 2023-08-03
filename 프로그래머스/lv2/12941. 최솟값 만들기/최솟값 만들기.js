function solution(A,B){
    let a = A.sort((a,b)=> a-b);
    let b = B.sort((a,b)=> b-a);
    let answer= a.reduce((acc,cur,i)=> acc + cur*B[i],0)
    return answer;
}