{
    interface SearchFunc {
        //定義function 的型別 , interface有匿名承數的寫法
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function (source: string, subString: string) {
        let result = source.search(subString);
        return result > -1;
    }
    //另一種表示
    let mySearch1: (source: string, subString: string) => boolean;
    //(source: string, subString: string) => boolean 也是funtion type
    mySearch1 = function (source: string, subString: string) {
        let result = source.search(subString);
        return result > -1;
    }
}