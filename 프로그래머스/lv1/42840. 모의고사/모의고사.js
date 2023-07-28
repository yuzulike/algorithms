function solution(answers) {
    let answer= [];
    let score = [0,0,0];
    let firstArr = [1,2,3,4,5];
    let secondArr= [2,1,2,3,2,4,2,5];
    let thirdArr= [3,3,1,1,2,2,4,4,5,5];
    for(let i = 0; i< answers.length; i++){
        if(answers[i]=== firstArr[i%5]) score[0] += 1
        if(answers[i]=== secondArr[i%8]) score[1] += 1
        if(answers[i]=== thirdArr[i%10]) score[2] += 1
    }
    score.forEach((ele,i)=>{ if(ele === Math.max(...score)) answer.push(i+1)});
    return answer;
}