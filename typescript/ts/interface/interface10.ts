{
	class Point {
		    x: number
		    y: number
		    do(): void {
			        console.log("hello");
		    }
	}
	//interface extneds class
	interface Point3d extends Point {
		z: number;
		//Point3d extends point : 只會extend屬性不會有實作
	}
	(() => {
		    let point3d: Point3d;
		    point3d = { x: 1, y: 2, z: 3, do: () => { console.log("implement do") } };
	})();
}