{
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }
    //java 常見的用法
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x: number, y: number): number { return x + y; };
}