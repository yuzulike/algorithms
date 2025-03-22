function solution(schedules, timelogs, startday) {
    var answer = 0;
    const deadline = schedules.map((item)=> {if(item%100>=50) return item+50; 
else return item+10});
   
   let newTimelog =  timelogs.map((ele)=>ele.filter((ele,index)=> !((index+startday)%7 === 6 || (index+startday)%7 ===0)))
   
   for(let i =0; i< deadline.length;i++){
    newTimelog[i].some(time =>{
        if(time>deadline[i]){
            answer++;
            return true;
        }
    })
        
    }
   
   
    return schedules.length-answer;
}