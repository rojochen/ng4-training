class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
//java 當看到到用法
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };