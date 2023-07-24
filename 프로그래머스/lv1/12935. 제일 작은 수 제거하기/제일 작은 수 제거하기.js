function solution(arr) {
    const min = Math.min(...arr)
    let newArr= arr.filter(ele => ele > min)
    return  newArr.length ? newArr : [-1];
}