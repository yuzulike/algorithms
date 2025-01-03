function solution(s)  {
    // s를 (,)를 +1,-1로 치환하여 배열에 담기
 let array = s.split('').map(item=>{return(item==="("? 1:-1)});
    let calcArray = [];
    let sum = 0;
    for (let value of array){
        calcArray.push(value)
         sum += value;
        if(sum<0) return false
    }
    return sum === 0;
  } 