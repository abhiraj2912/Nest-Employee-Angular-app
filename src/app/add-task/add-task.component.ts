import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor (private api:ApiService){}

  name=""
  searchData:any=[]

  taskName=""
  description=""
  status="Assigned"

  readValues=()=>{
    let data ={"name":this.name}
    this.api.adminEmployeeSearch(data).subscribe(
      (response:any)=>{
        this.searchData=response
      }
    )
  }

  addTask=(empid:any)=>{
    let taskdata:any ={"empid":empid,"taskName":this.taskName,"description":this.description,"status":this.status}
    console.log(taskdata)
    this.api.addTask(taskdata).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("Task Added Successfully")
          window.location.reload()
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
