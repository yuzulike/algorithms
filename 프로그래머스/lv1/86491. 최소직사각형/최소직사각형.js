function solution(sizes) {
    let width= [], length = []; 
    let newSizes= sizes.map(ele=> ele.sort((a,b)=> a-b)); // 사이즈를 [작은수, 큰 수] 순으로 정렬
    for( let i =0; i< sizes.length ; i++){ // 작은 수들과 큰 수들을 각각 새로운 배열에 담기
        width.push(newSizes[i][0]);
        length.push(newSizes[i][1]);
    }
    return Math.max(...width) * Math.max(...length); // 새로운 배열에서 가장 큰 수들 끼리의 곱을 구함
}