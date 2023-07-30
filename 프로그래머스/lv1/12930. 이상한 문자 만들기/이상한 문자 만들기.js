function solution(s) {
    let arr = s.split(' '); // 띄어쓰기 기준으로 배열에 담기
     let mapFunction= ele =>{ // map() 콜백함수
         let newEle = '' 
            for(let i=0 ; i<ele.length ; i++){ 
            if(i % 2) newEle += ele[i].toLowerCase(); // 홀수번째는 소문자로
            else newEle += ele[i].toUpperCase() ; // 짝수번째는 대문자로
            }
        return newEle;
    }
    return arr.map(ele=> mapFunction(ele)).join(' '); // map 돌린 후 다시 문자열로 join
}
