{
	class Animal {
		public name: string; //預設是public
		private distance: number;//私有變數
		constructor(theName: string) {//建構子
			this.name = theName;
		}
		move(distance: number = 0):void {
			this.distance = distance;
		}
		protected eat(): void {
			console.log('just eat!');
		}
		private print():void {
			console.log(`${this.name} moved ${this.distance}.`);
		}
		static create(name: string): Animal {
			return new Animal(name);
		}
	}

	//繼承關係
	class Dog extends Animal {

		constructor(name: string) {
			super(name); //父類別的建構子
		}
		move(distance = 45) {
			super.move(distance);//
		}
		do(distanceInMeters = 45) {
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
	let dog = new Dog("小黑");
	let cat: Animal = new Cat("小黃");
}