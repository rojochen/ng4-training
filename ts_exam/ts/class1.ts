class Animal {
	public name:string; //預設是public
	private distance:number;//私有變數
	constructor(theName: string) {//建構子
		this.name = theName; 
	}
	move(distance: number = 0) {
		this.distance = distance;
	}
	protected eat():void{
		console.log('just eat!');
	}
	private print(){
		console.log(`${this.name} moved ${this.distance}.`);
    }
    static create(name:string):Animal{
        return new Animal(name);
    }
}


class Dog extends Animal { //只有子類別才能調用
	constructor(name: string) { 
		super(name); //父類別的建構子
	}
	move(distance = 45) {
		console.log('移動');
		super.move(distance);//
	}
	do(distanceInMeters = 45){
		console.log("狗狗邊走邊吃");
		this.eat(); //只有子類別才能調用
		this.move()
	}
}


class Cat extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Dog("Sammy the Python");
let tom: Animal = new Cat("Tommy the Palomino");
