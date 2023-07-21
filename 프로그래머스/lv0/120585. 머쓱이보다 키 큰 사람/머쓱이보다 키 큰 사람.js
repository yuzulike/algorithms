function solution(array, height) {
    let newArr= array.filter(ele => ele > height)
    return newArr.length;
}