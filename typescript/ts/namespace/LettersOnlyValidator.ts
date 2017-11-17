//LettersOnlyVaildator.ts
// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersValidator implements Validation.StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}