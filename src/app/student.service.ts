import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable()
export class StudentService{
    student:Student;

    returnStudent():Student{
        let student =new Student();
        
        student.id=101;
        student.name="prasanna";
        student.javaMarks=78;
        student.mathMarks=87;
        student.scienceMarks=65;

        return student;
    }

  

    
   
}