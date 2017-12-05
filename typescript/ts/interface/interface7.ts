interface ClockConstructor {
    //constructor interface
    new (hour: number, minute: number): ClockInterface;
}
//Clock的Interface
interface ClockInterface {
    tick();
}
//實作
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
let cc :ClockConstructor;
//實作interface的constructor
let clock:DigitalClock = new cc(1, 1);
 