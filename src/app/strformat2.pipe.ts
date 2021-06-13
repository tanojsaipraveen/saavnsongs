import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strformat2'
})
export class Strformat2Pipe implements PipeTransform {

  transform(value: string, image:string,changeable:string,change:string): unknown {
    var first =  image.replace(changeable, change);
    var secound = first.replace(changeable,change);
    return secound;
  }

}
