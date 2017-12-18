{
    console.log(this);
    let objA = {
        x:0,
        y:1,
        sum:0,
        add : function(){
            console.log(this);
            this.sum = this.x + this.y
        }
    }
    let objB = {
        x:"零",
        y:"一"
    }
    objA.add();
    objB.add = objA.add
    objB.add();
    console.log(objA.sum);
    console.log(objB.sum);
}