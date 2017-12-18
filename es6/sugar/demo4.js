{
    //Method definition shorthand syntax
    let obj = {   
      value:100,
      getValue( ){
          //直接使用function
          console.log(this.value)
       }
    }
    obj.getValue();
}