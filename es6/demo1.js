//es5 hosting 
function test(){
    console.log(name); 
    for(var i=1 ; i<3 ;i++){
        var name ="Chris";
        console.log(name);
    }
    console.log(i); 
    console.log(name);
}
test();
console.log(name);