namespace validation {
	//namespace content
	export interface StringValidator {
		isAcceptable(s: string): boolean;
	}
	const lettersRegexp:RegExp = /^[A-Za-z]+$/;
	const numberRegexp:RegExp = /^[0-9]+$/;
	export class LettersValidator implements validation.StringValidator {
		isAcceptable(s: string): boolean {
			return lettersRegexp.test(s);
		}
	};
	export class ZipValidator implements validation.StringValidator {
		isAcceptable(s: string): boolean {
			return s.length === 5 && numberRegexp.test(s);
		}
	};
}
