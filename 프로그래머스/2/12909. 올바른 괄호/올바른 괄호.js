function solution(s)  {
    // s를 (,)를 +1,-1로 치환하여 배열에 담기
 let array = s.split('').map(item=>{return(item==="("? 1:-1)});
    let calcArray = [];
    let sum = 0;
    for (let i=0; i<array.length; i++){
        calcArray.push(array[i])
         sum += array[i];
        if(sum<0) return false
    }
    return sum === 0;
  } 