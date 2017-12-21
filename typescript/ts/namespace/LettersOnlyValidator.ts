/// <reference path="Validation.ts" />
// 編譯的時侯會參照Validation.ts , 不用一起編譯
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}