{
    //物件實力物件
    let obj: {age:number,message:string} = null; 
    const showMessage = (obj: { message: string }) => {
        //只要有message 就是合法參數
        console.log(obj.message);
    }
    let test = () => {
        //duck type
        let person = { message: "Hello man" };
        let car = { type: "car", message: "Hello car" };
        showMessage(person);
        showMessage(car);
    }
    test();
}