import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})



export class FilterPipe implements PipeTransform {

  transform(value: any,args: string ) {
    if (value.length === 0 || args === '') {
      return value;
    }

    console.log('courseFilter: ',args);
    console.log('value:   ',value);


    const output1 = [];
    const output2 = [];

    if(value.length === 12){
      console.log('value:   ',value.length);

      for (const user of value) {

        // console.log('user: ' ,user.CourseName);
        // console.log('input string:  ',platformName);
  
        if(user.topicName.toLowerCase().includes(args.toLowerCase())){
          output2.push(user);
        }
  
      }
      return output2;
    }
    if(value.length === 10){

      for (const user of value) {

        // console.log('user: ' ,user.CourseName);
        // console.log('input string:  ',platformName);
  
        if(user.CourseName.toLowerCase().includes(args.toLowerCase())){
          output1.push(user);
        }
  
      }
      return output1;

    }

    // console.log(' value internal', value[0].CourseName);

  }


}

/*
transform(value: any, platformName: string,courseFilter: string ) {
  if (value.length === 0 || platformName === '') {
    return value;
  }

  console.log('courseFilter: ',courseFilter);
  // console.log('value:   ',value);
  // console.log(' value internal', value[0].CourseName);
  const output1 = [];
  const output2 = [];

  if(platformName){

    for (const user of value) {

      // console.log('user: ' ,user.CourseName);
      // console.log('input string:  ',platformName);

      if(user.CourseName.toLowerCase().includes(platformName.toLowerCase())){
        output1.push(user);
      }

    }
    return output1;

  }

  if(courseFilter){

    for (const user of value) {

      // console.log('user: ' ,user.CourseName);
      // console.log('input string:  ',platformName);

      if(user.topicName.toLowerCase().includes(courseFilter.toLowerCase())){
        output2.push(user);
      }

    }
    return output2;

  }

}

*/

