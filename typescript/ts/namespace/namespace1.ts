namespace Validation {
	//namespace content
	export interface StringValidator {
		isAcceptable(s: string): boolean;
	}
	const lettersRegexp = /^[A-Za-z]+$/;
	const numberRegexp = /^[0-9]+$/;
	export class LettersValidator implements StringValidator {
		isAcceptable(s: string): boolean {
			return lettersRegexp.test(s);
		}
	}
	export class ZipValidator implements StringValidator {
		isAcceptable(s: string): boolean {
			return s.length === 5 && numberRegexp.test(s);
		}
	}
}
