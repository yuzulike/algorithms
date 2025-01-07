function solution(numbers) {
    // 숫자를 문자열로 변환 후 정렬
    let sortedArr = numbers.map(String).sort((a, b) => (b + a) - (a + b));

    // 정렬된 결과가 모두 0일 경우 처리
    if (sortedArr[0] === "0") {
        return "0";
    }

    // 정렬된 배열을 문자열로 합치기
    return sortedArr.join('');
}
