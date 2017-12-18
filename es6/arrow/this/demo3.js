console.log(this);
{
    console.log(this);
    let objA = {
        name:"ObjectA",
        items:["iphone","mac-pro"],
        showItems : function(){
            //es5 常使用的招式,
            var that = this;
            this.items.forEach(function(v) {
                console.log(v)
                //console.log(this);
                console.log(that);
            });
        }
    }
    objA.showItems();

}