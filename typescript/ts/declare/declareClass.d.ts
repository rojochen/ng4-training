declare module "zoo" {
    class Animal {
        name: string;
        private distance;
        constructor(theName: string);
        move(distance?: number): void;
        protected eat(): void;
        private print();
        static create(name: string): Animal;
    }
    class Dog extends Animal {
        constructor(name: string);
        move(distance?: number): void;
        do(distanceInMeters?: number): void;
    }
    class Cat extends Animal {
        constructor(name: string);
        move(distanceInMeters?: number): void;
    }
}
//參考class/