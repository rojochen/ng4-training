{
    interface ClockConstructor {
        //constructor interface
        new(hour: number, minute: number): ClockInterface;
    }
    //Clock的Interface
    interface ClockInterface {
        tick();
    }
    //實作
    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) {
            console.log('DigitalClock constructor');
        }
        tick() {
            console.log("beep beep");
        }
    }
    let cc: ClockConstructor;
    //實作interface的constructor
    let clock: DigitalClock = new cc(1, 1);
    function checkObject(cc : ClockConstructor ){
        //interface 參數使用
        let concreteObject: DigitalClock = new cc(1,3);
        concreteObject.tick();

    } 
}
