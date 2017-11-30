{
    function hello () { return 'Hello outer' }
    console.log(hello());
    //function 作用域
    {
        function hello () { return 'Hello inner' }
        console.log(hello());
    }
    console.log(hello());
}