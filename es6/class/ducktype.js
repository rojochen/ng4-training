
var isWindow =  function( obj ) {
    return obj && typeof obj === "object" && "setInterval" in obj;
}

console.log(isWindow({setInterval:function(){}}));