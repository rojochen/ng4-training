{
    let name = "Dane";
    let age =15;
    let field = "email"
    //field 欄位可動態給值
    let getPersion = (fieldName) =>{ 
        return {
            name,
            age : 33,
            [fieldName]:'dane@yyy.com'
        };
    };
    //obj['key'] 的簡化版
    console.log(getPersion('email'));
    console.log(getPersion('mail'));
}