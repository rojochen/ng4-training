let man = {
    name:"Jay",
    do :function(action){
        console.log(this);
        console.log(this.name + " "+ something);
        
    }
}
var theMan = ()=> {
    man.do("run");
};
