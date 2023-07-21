function solution(numbers) {
  let avg = numbers.reduce((acc,cur)=>acc+cur,0) / numbers.length
    return avg;
}