import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})



export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    // console.log('value:   ',value);
    // console.log(' value internal', value[0].CourseName);
    const output = [];
    for (const user of value) {

      // console.log('user: ' ,user.CourseName);
      // console.log('input string:  ',filteredString);

      if(user.CourseName.toLowerCase().includes(filteredString.toLowerCase())){
        output.push(user);
      }

    }
    return output;
  }

}





