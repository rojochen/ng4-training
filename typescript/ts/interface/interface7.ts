{   //約束class的constructor
    interface ClockConstructor {
        //建立一個Constructor的interface
        new(hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        //合約的output
        tick();
    }
    //create function 
    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        //動態new實體
        return new ctor(hour, minute);
    }
    function printClock(ctor: ClockConstructor, hour: number, minute: number) {
        let v = new ctor(hour, minute);
        console.log(v);
    }
    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("tick tock");
        }
    }

    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
    printClock(AnalogClock, 1, 1);
}