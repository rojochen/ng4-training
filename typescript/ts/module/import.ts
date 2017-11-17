//{EXPORT FILE的變數 } e.g: mainValidator ,ZipCodeValidator or numberRegexp
import { mainValidator } from "./ZipCodeValidator";
import { ZipCodeValidator as ZCV  } from "./ZipCodeValidator";
import * as validator from "./ZipCodeValidator";
let myValidator = new ZCV();
myValidator = new mainValidator();
 myValidator = new validator.ZipCodeValidator();

 