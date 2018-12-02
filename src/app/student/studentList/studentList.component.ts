import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList: Array<object> = null;
  constructor(private studentServices: StudentService) {

  }
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentServices.getStudents().subscribe((data: Array<object>) => {
      this.studentList = data;
    console.log(this.studentList);

    });
  }
}