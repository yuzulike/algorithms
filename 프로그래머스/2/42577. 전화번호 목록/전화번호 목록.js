function solution(phone_book) {
    var answer = true;
    phone_book.sort(); // 요소를 string 오름차순으로 정렬
    phone_book.forEach((ele,i)=> {
    if(i > 0 && phone_book[i].startsWith(phone_book[i-1])) answer = false;}) // 이전 순서의 요소로 시작하면 answer를 false로
    return answer;
}