function solution(phone_number) {
    let arr = phone_number.split("");
    for(let i=0; i<arr.length; i++){
    if(i < arr.length-4) arr[i] = "*";
    }
    return arr.join('');
}