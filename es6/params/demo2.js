//預設參數從method取得值
//增加值到陣列
function append(value, array = getArray()) {
    array.push(value);
    return array;
  }
//
let getArray = ()=>[];

append(1); //[1]
append(2); //[2], not [1, 2]
let array = append(3,append(2));
console.log(array);