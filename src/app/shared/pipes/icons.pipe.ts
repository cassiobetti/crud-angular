import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons'
})
export class IconsPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'true': return 'done' ;
      case 'false': return 'close';
      case '': return 'close';
    }
    return '';
  }


}
