function solution(s, n) {
    // 소문자와 대문자 알파벳 나열
    let lowerAl= ["a","b","c","d","e","f",'g',"h","i","j","k","l","m","n","o","p","q","r","s","t",'u',"v","w","x","y","z"];
    let upperAl= ["A",'B',"C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    // 문자열 s를 배열로 나누기
    let arr= s.split('');
    // 배열 요소를 소문자, 대문자, 공백일 때를 분류하여 n칸 후의 알파벳을 return하는 함수 작성
let mapFunction = ele=>{
    if(ele=== " ")  return ' '
    else if(ele===ele.toUpperCase()) return upperAl[(upperAl.indexOf(ele)+n)%26];
    else return lowerAl[(lowerAl.indexOf(ele)+n)%26];
    } 
// 해당 함수를 map의 콜백함수에 적용, 다시 문자열로 변경
 let newArr= arr.map(ele=> mapFunction(ele)).join('');
 return newArr;
}
