import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StateService } from '../state.service';
import { PlatformCourseList } from '../platform-course-list';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {


  form!: FormGroup;
  numRows: number = 0;
  topicNameOptions:string[] = [];
  selectedtopicNameValue: string = this.topicNameOptions[0];

  constructor(private fb: FormBuilder,
    private service:StateService
  ) {

    service.getTopicList().subscribe(data=>{

      console.log("topiclist :",data.length);
      for(var i=0;i<data.length;i++){
        this.topicNameOptions[i] = data[i].topicName;
      }
      console.log("topic names: ",this.topicNameOptions);

    })

  }

  ngOnInit() {
    this.form = this.fb.group({
      rows: this.fb.array([])
    });
  }

  get rows(): FormArray {
    return this.form.get('rows') as FormArray;
  }

  createRow(): FormGroup {
    return this.fb.group({
      topicName: [this.selectedtopicNameValue, Validators.required],
      platformName: ['', Validators.required],
      affiliateLink: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required],
      imagePath: ['', Validators.required]
    });
  }

  setRows() {
    this.rows.clear();
    for (let i = 0; i < this.numRows; i++) {
      this.rows.push(this.createRow());
    }
  }

  onCol1Change(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedtopicNameValue = selectedValue;
    this.updateCol1Values();
  }

  updateCol1Values() {
    this.rows.controls.forEach(row => {
      row.get('topicName')?.setValue(this.selectedtopicNameValue);
    });
  }

  courseList:Array<Object> = [];

  onSubmit() {
    console.log(this.form.value);

    const rows = this.form.value.rows;
    rows.forEach((row: any, index: number) => {
      console.log(`Row ${index + 1}:`, row);
      this.courseList.push(row);
    });


    console.log("course",this.courseList);
    this.service.sendCourseList(this.courseList).subscribe(data=>{
      console.log(data);
    });
  }

}
