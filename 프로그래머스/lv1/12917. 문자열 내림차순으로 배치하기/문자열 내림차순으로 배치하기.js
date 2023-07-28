function solution(s) {
    let alpha= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    var arr= [];
    for(let i=0; i<s.length; i++){
        arr.push(alpha.indexOf(s[i]));
    }
 return arr.sort((a,b)=> b-a).map(ele=> alpha[ele]).join('')
}