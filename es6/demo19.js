let nums = [1,2,3,4];
function addNum(...nums){
    let total = 0 ;
    for(let i = 0 ; i<nums.length ; i++){
        total += nums[i] ;
    }
    return total;
}
console.log(addNums(2,4,6));
console.log(...nums);