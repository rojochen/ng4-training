const getPromise = (ran = 1) => {
    //new promise
    //resolve ,reject
    let newPromise = new Promise((resolve, reject) => {
        // 傳入 resolve 與 reject，表示資料成功與失敗

        console.log('Promise 開始')
        if (ran) {
            setTimeout(function () {
                // 3 秒時間後，透過 resolve 來表示完成
                resolve({message:'3 秒時間(fulfilled)'});
            }, 3000);
        } else {
            // 回傳失敗
            reject({message:'失敗中的失敗(rejected)'})
        }
    });
    return newPromise;
}
let processPromis = () => {
    let myPromise = getPromise(parseInt(Math.random() * 2));
    myPromise.then((data) => {
        // 成功訊息 
        console.log(data.message);
    }).catch((err) => {
        // 失敗訊息 
        console.log(err.message);
    });
    return myPromise;
}
processPromis().then((data)=>{
    console.log("processPromise message:"+data.message);
})