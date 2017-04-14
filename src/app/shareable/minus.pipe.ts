import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minus',
  pure:false
})
/**
 * filterobj:{
 * filterarray:[]
 * filterelems:[]
 * 
 * 
 * 
 * 
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 */
export class MinusPipe implements PipeTransform {

  transform(value: Array<any>, filtrobj): any {   
  return !filtrobj.filterarray?value:value.filter((val,index)=>{return filtrobj.filterarray.filter((valf,indexf)=>{return (filtrobj.filterelems)?filtrobj.filterelems.filter((vali,indi)=>{return valf[vali]==val[vali]}).length==filtrobj.filterelems.length:valf==val;}).length==0})}

}
