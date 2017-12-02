
var isWindow =  function( obj ) {
    //jquery source code
    return obj && typeof obj === "object" && "setInterval" in obj;
}

console.log(isWindow({setInterval:function(){}}));
var isPersion = function(obj){
    return obj && typeof obj === "object" &&  typeof obj.firstName ==="string";
}
//{firstName} => 這個就是persion 物件
console.log(isPersion({firstName:'roger'}));
