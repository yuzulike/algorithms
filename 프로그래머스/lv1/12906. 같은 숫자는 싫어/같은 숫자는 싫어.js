function solution(arr){
    let newArr = arr.filter((ele, i)=>ele == arr[i+1]? false : true);
    return newArr;
}