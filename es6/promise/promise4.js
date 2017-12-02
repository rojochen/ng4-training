const getPromise = (state=true,index) => {
    //new promise
    let newPromise = new Promise((resolve, reject) => {
        // 傳入 resolve 與 reject，表示資料成功與失敗
        console.log('Promise 開始:' + index)
        if (state) {
            setTimeout(()=> {
                // 3 秒時間後，透過 resolve 來表示完成
                resolve({message:'3 秒時間(fulfilled)'});
                console.log('Promise resolve')
                
            }, 3000);
        } else {
            // 回傳失敗
            reject({message:'失敗(rejected)',index})
            console.log('Promise reject')
            
        }
    });
    return newPromise;
}
//async 表示該 function 是個非同步的
async function process() {
    let p1 = await getPromise(true,1);//await 表示要等待這個非同步的結果回傳後才會繼續執行
    let p2 = await getPromise(true,2);
};
process();