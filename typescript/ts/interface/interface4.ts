{
	interface SquareConfig {
		color?: string;
		width?: number;
		[propName: string]: any;
		//interface 能有任意的屬性,很彈性的設計
	}
	let SquareConfig: SquareConfig;
	SquareConfig = {
		height: "200"
	}
}
