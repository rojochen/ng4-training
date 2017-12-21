/** @type {number} */
var x;

x = 0;      // OK
//x = false;  // Error: boolean is not assignable to number

class C {
	constructor() {
		/** @type {number | undefined} */
		this.prop = undefined;

	}
}


let c = new C();
c.prop = 0;         // OK
//c.prop = "string";  // Error 

/**
 * @param {string} [somebody] -  name.
 */
function sayHello(somebody) {
    if (!somebody) {
        somebody = 'John';
    }
    alert('Hello ' + somebody);
}

sayHello();