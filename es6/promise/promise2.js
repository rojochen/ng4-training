const getPromise =() =>{
// 宣告 promise 建構式
    let newPromise = new Promise((resolve, reject) => {
        // 傳入 resolve 與 reject，表示資料成功與失敗
        let ran = parseInt(Math.random() * 2); // 隨機成功或失敗
        console.log('Promise 開始')
        if (ran) {
        setTimeout(function(){
            // 3 秒時間後，透過 resolve 來表示完成
            resolve('3 秒時間(fulfilled)');
        }, 3000);
        } else {
        // 回傳失敗
            reject('失敗中的失敗(rejected)')
        }
    });
    return newPromise;
}
    
(() =>{
    let myPromise =  getPromise();
    myPromise.then((data)=> {
        // 成功訊息 (需要 3 秒)
        console.log(data);
        }).catch((err)=> {
        // 失敗訊息 
        console.log(err)
        });
})();
    