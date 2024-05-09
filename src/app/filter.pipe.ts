import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})



export class FilterPipe implements PipeTransform {

  // use debugging by printing values in the console :)

  // transform function takes 2 arguments, the value entered in searchbox(->args) and the array(->value) in which we want to search it
  transform(value: any,args: string ) {
    if (args === '') {
      return value;
    }


    const keys = Object.keys(value[0]); // extracting keys present in 1st element
    const len = keys.length; // counting the number of keys

    // console.log('courseFilter: ',args);
    // console.log('length:   ',keys);

    // to make multiple search boxes in this only one transform function of filter pipe. here i am checking for any particular element which is present in the passed array 
    // for the selected search box

    const output1 = [];
    const output2 = [];

    if(len === 3){

      for (const user of value) {
          // checking if entered string is present in any of the string which is present in our concerned array
        if(user.topicName.toLowerCase().includes(args.toLowerCase())){
          output2.push(user);
        }
      }
      return output2;
    }

    if(len === 8){

      for (const user of value) {

        if(user.platformName.toLowerCase().includes(args.toLowerCase())){
          output1.push(user);
        }
  
      }
      return output1;
    }
  }
}
