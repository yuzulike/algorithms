function solution(begin, target, words) {
 
    if(!words.includes(target)) return 0;
    
    
    function oneletterDiff(word1,word2){
        let sum=0;
        for (let i=0;i<word1.length;i++){
            if(word1[i]!== word2[i]) sum++
            if(sum >1) return false
        }
        if (sum ===1) return true
    }
    
    
        const queue = [[begin,0]];
        const visited = new Set();
        
        while(queue.length>0){
            let current = queue.shift();
            let [curword, count] = current
              if(visited.has(curword)){
                   continue;
               }
                 visited.add(curword)
            
            if(curword === target) return count;
            for (let word of words){
             
              if(!visited.has(word)&&oneletterDiff(curword,word)){
                  queue.push([word,count+1])
              }
                
            }
        
    }
    return 0;
}