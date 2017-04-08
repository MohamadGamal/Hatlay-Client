import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args && value){
      let keys = Object.keys(args);      
      return value.filter((elem, index, arr)=>
      {
        return (elem[keys[0]] && args[keys[0]])?elem[keys[0]].toString().toUpperCase().includes(args[keys[0]].toUpperCase()):false;
      });  
    }
      else
      return value;
  }

}
