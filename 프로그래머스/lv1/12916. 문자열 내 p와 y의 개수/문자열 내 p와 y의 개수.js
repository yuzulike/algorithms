function solution(s){
    var answer = 0;
for(let i =0 ; i < s.length ; i++){
   if( s[i]=== "p" || s[i]==="P") answer++;
    if( s[i]=== "y" || s[i]==="Y") answer--;
}
    return !answer;
}