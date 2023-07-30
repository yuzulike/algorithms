function solution(s) {
    var answer = [];
    let arr = s.split(' ');
     let mapFunction= ele =>{
         let newEle = ''
        for(let i=0 ; i<ele.length ; i++){
        if(i % 2) newEle += ele[i].toLowerCase();
        else newEle += ele[i].toUpperCase() ;
        }
            return newEle;
    }
    let newArr= arr.map(ele=> mapFunction(ele))
   
    return newArr.join(' ');
}
