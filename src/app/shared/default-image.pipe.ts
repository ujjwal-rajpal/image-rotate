import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, fallback: string): string {
    console.log(value);
    let image="";
    image = ((value != null) ?  value :  fallback )
    return image;
    
  }

}
