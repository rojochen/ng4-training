//REST operator 
{
    let nums  ;
	//…nums 預設參數型別為陣例
    function sum(...nums){
        let total = 0 ;
        for(let i = 0 ; i<nums.length ; i++){
            total += nums[i] ;
        }
        //array map method
        //nums.map(v=> total+=v)
        return total;
    }
    console.log(sum(2,4,6));
    nums = [1,3,5];
    console.log(...nums);
}
 