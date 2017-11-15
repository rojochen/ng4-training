export const showMessage = (obj: { message: string }) => {
    //只要有message 就是合法參數
    console.log(obj.message);
}
let test = ()=>{
    //duck type
    let persion = {  message: "Hello man" };
    let car = {type:"car" ,  message: "Hello car" } 
    showMessage(persion);
    showMessage(car);
}

test();
