let delay = function(s){
    return new Promise(function(resolve,reject){
     setTimeout(resolve,s); 
    });
};
  
delay().then(function(){
    console.log(1);    
    return delay(1000); 
}).then(function(){
    console.log(2);     
    return delay(1000); 
}).then(function(){
    console.log(3);  
});