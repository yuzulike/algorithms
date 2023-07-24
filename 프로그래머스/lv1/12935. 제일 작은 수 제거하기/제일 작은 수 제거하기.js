function solution(arr) {
    let newArr= arr.filter(ele => ele > Math.min(...arr))
    return  newArr.length ? newArr : [-1];
}