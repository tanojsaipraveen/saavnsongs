import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strformat'
})
export class StrformatPipe implements PipeTransform {

  transform(value: string, image:string,changeable:string,change:string): string {
    return image.replace(changeable, change);
  }

}
