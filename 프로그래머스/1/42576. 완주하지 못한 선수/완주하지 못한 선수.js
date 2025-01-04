function solution(participant, completion) {
    var answer = '';
        let hashObj={};
        for (const name of participant){
     if(hashObj[name]) { 
         hashObj[name] += 1
     }  else hashObj[name] = 1;
    } 
   
    for(const name of completion){
  hashObj[name] -= 1;
    }
    
       for(const name of participant){
 if( hashObj[name] !== 0) return name;
    }
    
}