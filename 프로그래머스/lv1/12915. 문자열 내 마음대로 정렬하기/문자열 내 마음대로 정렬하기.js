function solution(strings, n) {
    let sortFunction=(a,b)=>{
     if(a[n] > b[n]) return 1;
     if(a[n] < b[n]) return -1;
     if(a[n] === b[n]){
        if(a > b) return 1;
        if(a < b) return -1;
        if(a == b) return 0;
     }
     }
     return strings.sort((a,b)=>sortFunction(a,b))
     
}