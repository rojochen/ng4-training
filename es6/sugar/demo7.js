{
    //array  iterator
    let nums = [11,42,33,4];
    for(let num of nums){
        console.log(num);
    }
    //map (callbackFn)
    nums.map((val,index,array)=>{
        console.log(val);
        console.log(index);
        console.log(array);
    })
}