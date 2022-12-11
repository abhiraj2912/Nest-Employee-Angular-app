import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-task-view',
  templateUrl: './employee-task-view.component.html',
  styleUrls: ['./employee-task-view.component.css']
})
export class EmployeeTaskViewComponent {

  id=localStorage.getItem("userInfo")

  taskData:any=[]

  constructor(private api:ApiService){
    let data:any={"empid":this.id}
    api.employeeTaskView(data).subscribe(
      (response:any)=>{
        this.taskData=response
      }
    )
  }

}
