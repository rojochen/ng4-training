{
    interface CheckConstructor {
        new(num: number)
    }
    function checkType(cc: CheckConstructor) {
        console.log('do check');
    }
    class MyClass {
        constructor(num: number) {
         
        }
    }
    class OurClass {
        constructor(num: number, num2: number) {

        }
    }
    //只有constructor 正確的才不會出錯
    checkType(MyClass);
 
}