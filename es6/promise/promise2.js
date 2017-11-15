let getPromise =( i = 1) =>{
   let promise =  new Promise((resolve, reject) => {
        setTimeout(function(){
            if(i % 2 == 1){
                resolve("Success!"); // Yay！非常順利！
            }else{
                reject("Error!");
            }
        }, 250);
    });
    return promise;
}

() => {
    let promise = getPromise(1);
    promise.then(()=>{

    })
}