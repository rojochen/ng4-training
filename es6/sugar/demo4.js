{
    //Method definition shorthand syntax
    let obj = {   
      value:100,
      getValue( ){
          //直接寫程method
          console.log(this.value)
       }
    }
    obj.getValue();
}