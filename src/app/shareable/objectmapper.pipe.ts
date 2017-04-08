import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectmapper',
  pure:false
})
export class ObjectmapperPipe implements PipeTransform {

  transform(value: Object,state:Number ): any {
    switch(state){
      default:
    return null;
  
}
  }

}
