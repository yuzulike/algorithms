function solution(enroll, referral, seller, amount) {
    var answer = [];
    let obj = {}

    for(const name of enroll){
      obj[name] = 0;
    }
    
    let connectionObj ={};
    for (i=0;i<enroll.length;i++ ){
        connectionObj[enroll[i]] = referral[i];
    }

    for (let i =0;i<seller.length;i++){
        let nameKey = seller[i]
        let money =amount[i]*100
    while(nameKey !=='-' &&money>0){  
        
         obj[nameKey] += Math.ceil(0.9*money)
       
       nameKey=connectionObj[nameKey]
        money = Math.floor(0.1*money)
      }
    }
    return Object.values(obj);
}