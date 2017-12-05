{
    let man = {
    name:"Jay",
    say :(greeting)=>{
        //{
        console.log(this);
        console.log(this.name + " "+ greeting);
    },
    do :function(action){
        //物實實字宣告this會是自己本身的物件
        console.log(this);
        console.log(this.name + " "+ action);
    },

    }
    man.say("Hello");
    man.do("run");
}
