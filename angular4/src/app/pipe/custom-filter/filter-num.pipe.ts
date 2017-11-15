import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNum'
})
export class FilterNumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(list => {
      if (args) {
        return args === list;
      } else {
        return list;
      }
    });
  }

}
