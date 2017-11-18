const getPromise = (ran = 1,index) => {
    //new promise
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
            reject({message:'失敗(rejected)',index})
        }
    });
    return newPromise;
}
let processAllPromise = () => {
    //取得promise物件
    let myPromise = getPromise(parseInt(Math.random() * 2),1);
    let myPromise1 = getPromise(parseInt(Math.random() * 2),2);
    let myPromise3 = getPromise(parseInt(Math.random() * 2),3);
    //多筆promise要這樣處理
    Promise.all([myPromise,myPromise1,myPromise3]).then((value)=>{
        //全部成功才會執行這裡
        console.log("All Scuess:");
        //全部成功會印出成功的回傳的物件陣例
        console.log(value)
    }).catch((error)=>{
        console.log("Error:");
        console.log(error);
        return error
    });

}
processAllPromise();