{
    function add(){
        console.log(this)
    }
    let objA = {a:"objectA"};
    objA.add = add;
    objA.add();//this 指的objA
    let objB = {b:"objectB"};
    objB.add = add;
    objB.add(); //this 指的objB
    add();//全域的FUNCTION
}