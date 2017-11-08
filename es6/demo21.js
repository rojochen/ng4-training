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
console.log( `His name is ${obj.first} ${obj.last}.`);
