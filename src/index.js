// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    var obj = {}
    
    if(currency <= 0){            
        return obj;
    }

    if(currency > 10000){
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";     
        return obj;
    }
   
    obj.H = Math.floor(currency / 50);
    if((currency % 50) > 0){
        currency = currency % 50;
        obj.Q = Math.floor(currency / 25);
        if((currency % 25) > 0){
            currency = currency % 25;
            obj.D = Math.floor(currency / 10);
            if((currency % 10) > 0){
                currency = currency % 10;
                obj.N = Math.floor(currency / 5);
                if((currency % 5) > 0){
                    currency = currency % 5;
                    obj.P = Math.floor(currency / 1);
                }
            }   
        }
    }
   
    for (var key in obj){
        if(obj[key] == 0){
            delete obj[key];
        }
    }

    return obj;
}
