enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
let fn = (direction:Direction)=>{
    //可當參數傳
    console.log(direction)
}
fn(Direction.Up);
//Direction的loop
for (const direction in Direction) {
    console.log(direction);
}