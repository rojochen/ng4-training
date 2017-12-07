interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}
//空物件轉型成Square
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;