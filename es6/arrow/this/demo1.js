{
    function add(){
        console.log(this)
    }
    let objA = {a:"objectA"};
    objA.add = add;
    objA.add();
    let objB = {b:"objectB"};
    objB.add = add;
    objB.add();
    add();//全域的FUNCTION
}