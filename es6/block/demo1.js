//es5 hosting 
//es5 function 才有區塊(block)的概念
function test(){
    //name is ?
    console.log(name); 
    //一般for迴圈裡沒有區塊
    for(var i=1 ; i<3 ;i++){
        var name ="Chris";
        //console.log(name + ", i");
    }
    //i is ?
    console.log(i); 
}
test();
