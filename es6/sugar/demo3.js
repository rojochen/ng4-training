//String template
let first = "James";
let last = "Lee"
let name = `Your name is ${first} ${last}.`;
console.log(name);
console.log( typeof `Your name is ${first} ${last}.`);
let obj ={
    first,
    last
}
//`這裡面使用的${obj.proprety}`
console.log( `His name is ${obj.first} ${obj.last}.`);