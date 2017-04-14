import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertymatcher',
  pure:false
})
export class PropertymatcherPipe implements PipeTransform {
/**
 * 
 * filterobj : {exact:0,matched:,value:}
 * 
 * 
 * 
 * 
 * 
 * 
 */
  transform(value: Array<any>, filterObject): any {
    return value.filter((val,indx)=>filterObject.exact?val[filterObject.matched]==filterObject.value:val[filterObject.matched].match(new RegExp(filterObject.value)));
  }

}
