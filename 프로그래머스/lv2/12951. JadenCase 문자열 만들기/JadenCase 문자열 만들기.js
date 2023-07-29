function solution(s) {
  let arr=s.split(' ')
  return arr.map(ele=> ele? ele[0].toUpperCase()+ele.substring(1).toLowerCase():'').join(' ')

}