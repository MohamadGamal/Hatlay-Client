import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
  pure:false
})
export class UniquePipe implements PipeTransform {

  transform(value: Array<any>,filterobj): any {
    var countob={};
     return  value.filter((e,i)=>countob[e[filterobj]]?false:countob[e[filterobj]]=1).length

  }

}
