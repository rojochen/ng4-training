export const numberRegexp = /^[0-9]+$/;
interface StringValidator {
    //export interface
    isAcceptable(s: string): boolean;
}
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
//export class
export { ZipCodeValidator };
//export  mainValidator
export { ZipCodeValidator as mainValidator };
