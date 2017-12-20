/// <reference path="myModules.d.ts" />
import * as m from "SomeModule";
//使用umd的方式編譯
//tsc --module umd  myOtherModule.ts
m.fn();