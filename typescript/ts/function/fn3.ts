//overload
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any { 
    //依參數不同型別回傳不同型態的值
    if (typeof x == "object") {
        //如果傳物件的話就隨便抽一張
        let pickedCard = Math.floor(Math.random() * x.length);
        //傳陣例回傳抽到牌的index
        return pickedCard; 
    }
    else if (typeof x == "number") {
        //傳入數字就選牌
        let pickedSuit = Math.floor(x / 13);
        //傳數字回傳抽到的牌
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
//array-object
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);