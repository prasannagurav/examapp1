import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
    selector:"app-student",
    templateUrl:"./student.component.html",
    styleUrls:["./student.component.css"]
})
export class StudentComponent{
    student:Student[]=[];

    constructor(private stdService:StudentService){}

    ngOnInit():void{
        this.student.push(this.stdService.returnStudent());
        this.student[0].avgMarks=((this.student[0].javaMarks+this.student[0].mathMarks+this.student[0].scienceMarks)/3);
    }
}