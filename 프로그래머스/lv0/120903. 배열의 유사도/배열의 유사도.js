function solution(s1, s2) {
    let arr = s1.concat(s2); // 두 배열을 합친 배열
    const set = new Set(arr); 
    let newArr = [...set]; // 두 배열의 중복을 제거한 배열
    return arr.length - newArr.length; // 배열길이의 차로 중복제거 된 요소의 갯수를 구함
}