import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let currentTimeline:any= new Date().getFullYear();
    let userDob:any=new Date(value).getFullYear();
    let myAge=currentTimeline-userDob;
    return myAge;
  }

}
