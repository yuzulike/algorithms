function solution(name, yearning, photo) {
    let obj = {};
    for(let i=0; i<name.length; i++){ // name과 추억점수 yearning을 객체에 키-값으로 생성
    obj[name[i]] = yearning[i]; 
    }
    var answer = photo.map((ele)=>ele.reduce((acc,cur)=>acc+ (obj[cur]||0),0)); // photo에서 이름배열(객체 키)을 추억점수(객체 값)의 합산으로 reduce를 사용하여 계산, 이름이 객체에 없을 경우 0을 더한다.
    return answer;
}