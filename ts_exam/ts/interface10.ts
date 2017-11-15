class Point {
	x: number 
	y: number 
	do():void{
		console.log("hello");
	}
}
interface Point3d extends Point {
	z: number;
}
(()=>{
	let point3d: Point3d ;
	point3d = {x: 1, y: 2, z: 3,do:()=>{console.log("implement do")}};
})();
