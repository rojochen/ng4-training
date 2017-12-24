{   //可在type中間使用| 設定多種型別
    function isZipCOde(value: string | number): boolean {
        // 傳入字串或數字都可以
        return true
    }
    //回傳值也可以是多個
    function getZipCode(): string | number {
        return 110
    }
}