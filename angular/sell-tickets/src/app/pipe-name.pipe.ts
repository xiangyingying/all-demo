import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeName'
})
export class PipeNamePipe implements PipeTransform {

  transform(value: {}): string[]{
    if (!value) {
      return [];
    }

    return Object.keys(value);
  }

}
