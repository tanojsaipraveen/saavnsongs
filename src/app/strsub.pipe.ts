import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strsub'
})
export class StrsubPipe implements PipeTransform {

 
  transform(value: string, album_url:string,strlength: number): string {
    var length = album_url.length;
    return album_url.substring(length-strlength ,length);
  }

}
